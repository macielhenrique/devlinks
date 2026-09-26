const socialLinks = [
  {
    platform: "Kick",
    title: "Acompanhe minhas lives na Kick",
    url: "https://kick.com/zhenriquemaciel",
    handle: "@zhenriquemaciel",
    icon: { type: "image", source: "./assets/kick.svg" },
  },
  {
    platform: "Instagram",
    title: "Me siga no Instagram",
    url: "https://www.instagram.com/zhenriquemaciel",
    handle: "@zhenriquemaciel",
    icon: { type: "image", source: "./assets/instagram.svg" },
  },
  {
    platform: "TikTok",
    title: "Me siga no TikTok",
    url: "https://www.tiktok.com/@zhenriquemaciel",
    handle: "@zhenriquemaciel",
    icon: { type: "image", source: "./assets/tiktok.svg" },
  },
  {
    platform: "Twitch",
    title: "Acompanhe minhas lives na Twitch",
    url: "https://www.twitch.tv/zhenriquemaciel",
    handle: "@zhenriquemaciel",
    icon: { type: "ionicon", source: "logo-twitch" },
  },
  {
    platform: "YouTube",
    title: "Inscreva-se no meu canal do YouTube",
    url: "https://www.youtube.com/@zhenriquemaciel",
    handle: "@zhenriquemaciel",
    icon: { type: "ionicon", source: "logo-youtube" },
  },
]

const arrowIcon = `
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`

function createIcon(icon) {
  if (icon.type === "image") {
    return `<img src="${icon.source}" alt="" width="25" height="25" />`
  }

  return `<ion-icon name="${icon.source}" aria-hidden="true"></ion-icon>`
}

function createSocialCard(link) {
  return `
    <a
      class="social-card"
      href="${link.url}"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="${link.title}. Abre em uma nova aba."
    >
      <span class="social-icon" aria-hidden="true">${createIcon(link.icon)}</span>
      <span class="social-copy">
        <span class="social-title">${link.title}</span>
        <span class="social-platform">${link.platform} · ${link.handle}</span>
      </span>
      <span class="arrow">${arrowIcon}</span>
    </a>
  `
}

const linksContainer = document.querySelector("#links")

if (linksContainer) {
  linksContainer.innerHTML = socialLinks.map(createSocialCard).join("")
}
