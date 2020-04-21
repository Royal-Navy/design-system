---
title: Container
description: ''
tags: public
pageClass: ''
template: default
header: true
---

import DataTable from '../../../components/presenters/data-table'
import CodeHighlighter from '../../../components/presenters/code-highlighter'

# Container

The container CSS class wraps all of your main application content:

<CodeHighlighter 
source={`<div class="rn-container">
  // Main App Content
</div>`} language="html"
/>

## Available Sizing

The container class has three different variations. The default class has a padding of `0.75rem`. The Royal Navy Design System also provides a small container with padding of `0.5rem`:

<CodeHighlighter 
source={`<div class="rn-container--large">
  // Large Container
</div>`} language="html"
/>

A large container that has a padding of `1.25rem`:

<CodeHighlighter 
source={`<div class="rn-container--small">
  // Large Container
</div>`} language="html"
/>
