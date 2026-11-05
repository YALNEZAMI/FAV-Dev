<template>
  <header class="w-full border-b border-white/10 bg-slate-950/95 shadow-[0_12px_30px_rgba(15,23,42,0.35)] backdrop-blur-sm">
    <div class="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
      <div class="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-violet-400/40 bg-gradient-to-br from-violet-600 via-indigo-600 to-cyan-500 shadow-[0_12px_28px_rgba(109,40,217,0.35)] sm:h-20 sm:w-20">
        <svg viewBox="0 0 120 120" class="h-full w-full" aria-label="FAV-Dev logo" role="img">
          <defs>
            <linearGradient id="favBrandGradient" x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" stop-color="#f8fafc" />
              <stop offset="45%" stop-color="#dbeafe" />
              <stop offset="100%" stop-color="#a5f3fc" />
            </linearGradient>
          </defs>
          <rect x="10" y="10" width="100" height="100" rx="24" fill="rgba(15,23,42,0.18)" />
          <path d="M34 88V32h18.5c16 0 26.5 9.2 26.5 22.8 0 14.3-10.2 23.2-26.5 23.2H34zm18.1-13.5h4.9c8.1 0 13.4-4.6 13.4-11.7 0-7.2-5.3-11.7-13.4-11.7h-4.9v23.4z" fill="url(#favBrandGradient)" />
          <path d="M70 88V32h15.5l18.1 28.6V32H109v56H93.6L75.5 59.4V88H70z" fill="url(#favBrandGradient)" opacity="0.9" />
          <path d="M29 30h56" stroke="#f8fafc" stroke-width="4" stroke-linecap="round" opacity="0.75" />
        </svg>
      </div>
      <div class="flex-1 rounded-2xl border border-violet-400/20 bg-gradient-to-r from-violet-600 via-violet-500 to-cyan-500 px-4 py-3 text-center shadow-[0_10px_25px_rgba(109,40,217,0.25)] sm:px-6">
        <span class="block text-lg font-black uppercase tracking-[0.18em] text-white sm:text-xl">Avec vous, créons !</span>
        <span class="mt-1 hidden text-sm text-violet-100/90 italic sm:block">
          La révolution technologique n'attend personne. Donnez vie à votre présence digitale.
        </span>
      </div>
    </div>
  </header>
</template>
