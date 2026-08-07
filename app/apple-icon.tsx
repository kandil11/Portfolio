import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const size = {
  width: 180,
  height: 180,
}
 
export const contentType = 'image/png'
 
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 80,
          background: '#030712',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#14b8a6',
          fontWeight: 800,
          fontFamily: 'sans-serif',
          textShadow: '0 0 30px rgba(20, 184, 166, 0.4)',
        }}
      >
        MK
      </div>
    ),
    {
      ...size,
    }
  )
}
