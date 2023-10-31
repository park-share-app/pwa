// you can copy the base structure of manifest object.
import { VitePWAOptions } from 'vite-plugin-pwa';

export const manifestForPlugIn: Partial<VitePWAOptions> = {
    registerType: 'prompt',
    includeAssets: ['favicon.ico', "apple-touc-icon.png", "masked-icon.svg"],
    manifest: {
        name: "Share parking",
        short_name: "share-parking",
        description: "share parking app",
        icons: [
            {
                "src": "public/img/pwa/manifest-icon-192.maskable.png",
                "sizes": "192x192",
                "type": "image/png",
                "purpose": "any"
            },
            {
                "src": "public/img/pwa/manifest-icon-192.maskable.png",
                "sizes": "192x192",
                "type": "image/png",
                "purpose": "maskable"
            },
            {
                "src": "public/img/pwa/manifest-icon-512.maskable.png",
                "sizes": "512x512",
                "type": "image/png",
                "purpose": "any"
            },
            {
                "src": "public/img/pwa/manifest-icon-512.maskable.png",
                "sizes": "512x512",
                "type": "image/png",
                "purpose": "maskable"
            }
        ],
        // icons: [{
        //     src: '/android-chrome-192x192.png',
        //     sizes: '192x192',
        //     type: 'image/png',
        //     purpose: 'favicon'
        // },
        // {
        //     src: '/android-chrome-512x512.png',
        //     sizes: '512x512',
        //     type: 'image/png',
        //     purpose: 'favicon'
        // },
        // {
        //     src: '/apple-touch-icon.png',
        //     sizes: '180x180',
        //     type: 'image/png',
        //     purpose: 'apple touch icon',
        // },
        // {
        //     src: '/maskable_icon.png',
        //     sizes: '512x512',
        //     type: 'image/png',
        //     purpose: 'any maskable',
        // }
        // ],
        theme_color: '#171717',
        background_color: '#FFFF00',
        display: "standalone",
        scope: '/',
        start_url: "/",
        orientation: 'portrait'
    }
}