import { useEffect, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const registries: {
  [name: string]: { instances: Set<string>; callbacks: Set<() => void> }
} = {}

export function useIsFirstInstance(registryName: string) {
  registries[registryName] ??= { instances: new Set(), callbacks: new Set() }
  const registry = registries[registryName]

  const [isFirstInstance, setIsFirstInstance] = useState(
    registry.instances.size === 0
  )
  const idRef = useRef(uuidv4())
  const id = idRef.current

  registry.instances.add(id)

  useEffect(() => {
    const updateIsFirstInstance = () => {
      setIsFirstInstance(registry.instances.values().next().value === id)
    }
    registry.callbacks.add(updateIsFirstInstance)

    return () => {
      registry.callbacks.delete(updateIsFirstInstance)
      registry.instances.delete(id)

      registry.callbacks.forEach((callback) => {
        callback()
      })
    }
  }, [id, registry])

  return isFirstInstance
}
