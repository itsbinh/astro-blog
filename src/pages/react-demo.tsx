---
title: "React Integration Demo"
---

<div class="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 py-20">
  <div class="max-w-4xl mx-auto px-4 text-center">
    <h1 class="text-5xl font-bold text-white mb-8">🚀 React in Astro!</h1>
    <p class="text-xl text-white/90 mb-12">
      Mixing Astro's static performance with React's interactivity
    </p>
    
    <!-- React Component Integration -->
    <InteractiveButton 
      message="Hello from React!" 
      onClick={() => alert('Button clicked!')}
      class="mx-auto"
    />
    
    <div class="mt-16 bg-white/10 backdrop-blur-lg rounded-xl p-8">
      <h2 class="text-2xl font-bold text-white mb-4">Why mix Astro + React?</h2>
      <ul class="text-left space-y-3 text-white/90">
        <li>✅ <strong>Astro</strong> handles static pages with zero JS</li>
        <li>✅ <strong>React</strong> powers interactive components</li>
        <li>✅ <strong>Tailwind</strong> styles everything beautifully</li>
        <li>✅ <strong>Islands Architecture</strong> - only load React where needed</li>
      </ul>
    </div>
  </div>
</div>

<style is:global>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');
</style>
