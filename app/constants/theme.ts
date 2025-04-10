// Theme colors and gradients for consistent use across the application
// CSS variables are defined in globals.css

// CSS class strings for common gradient patterns
export const GRADIENTS = {
  // Text gradient
  text: 'gradient-text',
  
  // Background gradients
  bg: 'gradient-bg',
  bgSubtle: 'gradient-bg-subtle',
  bgHover: 'gradient-bg-hover',
  
  // Border gradients
  border: 'gradient-border',
  
  // Shadow gradients
  shadow: 'gradient-shadow'
};

// Helper functions to generate SVG gradient IDs and definitions
export const SVG_GRADIENT = {
  id: 'primary-gradient',
  def: `
    <linearGradient id="primary-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="var(--primary)" />
      <stop offset="100%" stopColor="var(--accent)" />
    </linearGradient>
  `,
  url: 'url(#primary-gradient)'
};

// Export a utility function to combine multiple gradient classes
export const combineClasses = (...classes: string[]) => classes.join(' '); 