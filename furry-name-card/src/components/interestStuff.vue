<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  description: string
}

const props = defineProps<Props>()

// Simple markdown parser for basic markdown features
const parseMarkdown = (text: string): string => {
  return text
    // Images: ![alt](url)
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" class="markdown-image" />')
    // Links: [text](url)
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" class="markdown-link">$1</a>')
    // Bold: **text** or __text__
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/__(.*?)__/g, '<strong>$1</strong>')
    // Italic: *text* or _text_
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/_(.*?)_/g, '<em>$1</em>')
    // Code: `code`
    .replace(/`([^`]+)`/g, '<code class="markdown-code">$1</code>')
    // Line breaks
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n/g, '<br>')
}

const parsedDescription = computed(() => {
  const parsed = parseMarkdown(props.description)
  return `<p>${parsed}</p>`
})
</script>

<template>
  <div class="interest-stuff-container">
    <div 
      class="markdown-content"
      v-html="parsedDescription"
    ></div>
  </div>
</template>

<style scoped>
.interest-stuff-container {
  width: 100%;
  max-width: 32rem;
  margin: 0 auto;
  padding: 1rem;
}

.markdown-content {
  color: #1f2937;
  line-height: 1.625;
}

@media (prefers-color-scheme: dark) {
  .markdown-content {
    color: #e5e7eb;
  }
}

.markdown-content :deep(p) {
  margin-bottom: 1rem;
}

.markdown-content :deep(p:last-child) {
  margin-bottom: 0;
}

.markdown-content :deep(.markdown-image) {
  max-width: 100%;
  height: auto;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  margin: 1rem auto;
  display: block;
}

.markdown-content :deep(.markdown-link) {
  color: #2563eb;
  text-decoration: underline;
  transition: color 0.2s;
}

.markdown-content :deep(.markdown-link:hover) {
  color: #1d4ed8;
}

@media (prefers-color-scheme: dark) {
  .markdown-content :deep(.markdown-link) {
    color: #60a5fa;
  }
  
  .markdown-content :deep(.markdown-link:hover) {
    color: #93c5fd;
  }
}

.markdown-content :deep(strong) {
  font-weight: bold;
  color: #111827;
}

@media (prefers-color-scheme: dark) {
  .markdown-content :deep(strong) {
    color: #ffffff;
  }
}

.markdown-content :deep(em) {
  font-style: italic;
}

.markdown-content :deep(.markdown-code) {
  background-color: #f3f4f6;
  color: #dc2626;
  padding: 0.125rem 0.25rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}

@media (prefers-color-scheme: dark) {
  .markdown-content :deep(.markdown-code) {
    background-color: #1f2937;
    color: #f87171;
  }
}

.markdown-content :deep(br) {
  display: block;
  margin-bottom: 0.5rem;
}
</style>
