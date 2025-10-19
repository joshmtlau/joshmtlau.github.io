/**
 * Custom rehype plugin to add custom classes to markdown elements
 */
export function rehypeCustomClasses() {
  return (tree) => {
    // Visit all nodes in the AST
    function visit(node) {
      if (node.type === 'element') {
        // Add custom classes to headings
        if (node.tagName === 'h1') {
          node.properties = node.properties || {};
          node.properties.className = node.properties.className || [];
          if (typeof node.properties.className === 'string') {
            node.properties.className = [node.properties.className];
          }
          node.properties.className.push('font-heading-1');
        }
        
        if (node.tagName === 'h2') {
          node.properties = node.properties || {};
          node.properties.className = node.properties.className || [];
          if (typeof node.properties.className === 'string') {
            node.properties.className = [node.properties.className];
          }
          node.properties.className.push('font-heading-2');
        }
        
        if (node.tagName === 'h3') {
          node.properties = node.properties || {};
          node.properties.className = node.properties.className || [];
          if (typeof node.properties.className === 'string') {
            node.properties.className = [node.properties.className];
          }
          node.properties.className.push('font-heading-3');
        }
      }
      
      // Recursively visit children
      if (node.children) {
        node.children.forEach(visit);
      }
    }
    
    visit(tree);
  };
}
