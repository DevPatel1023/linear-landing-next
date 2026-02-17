'use client'

import { type FC } from 'react'
import Image from 'next/image'
import IllustrateAnimate from './IllustrateAnimate'
import Sidebar from './Sidebar'

const StackImagesSection: FC = () => {
  return (
    /*
     * .hero
     * pt-6 sm:pt-[72px] relative
     */
    <section className="pt-6 sm:pt-[72px] relative overflow-x-hidden">

      {/*
       * .hero .hero__img__container
       * pointer-events-none select-none relative
       * width: 100vw; left: 50%; margin-left: -50vw; margin-right: -50vw
       *
       * ::before  → sm:mt-[-18%] lg:mt-[-140px]  (overlap spacer)
       * ::after   → gradient fade bottom overlay
       */}
      {/*
       * .hero .hero__img__container
       * pointer-events-none select-none relative
       * width: 100vw; left: 50%; margin-left: -50vw; margin-right: -50vw
       *
       * ::before  → sm:mt-[-18%] lg:mt-[-140px]  (overlap spacer)
       * ::after   → gradient fade bottom overlay
       */}
      <div
        className="pointer-events-none select-none relative"
        style={{
          width: '100vw',
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw',
        }}
      >
        {/* ::before — negative top margin overlap into previous section */}
        <div className="block sm:-mt-[18%] lg:-mt-[140px]" aria-hidden />

        {/* ::after — fade-to-bg gradient overlay */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-[2]"
          style={{
            background:
              'linear-gradient(to bottom, transparent 50%, var(--color-bg-primary) 100%)',
          }}
        />

        {/*
         * .hero__illustration__container
         * h-[600px] sm:h-[900px] w-full
         * --Sidebar-width: 260px
         */}
        <div
          className="h-[600px] sm:h-[900px] w-full select-none pointer-events-none"
          style={{ '--Sidebar-width': '260px' } as React.CSSProperties}
        >
          {/*
           * .hero__illustration__perspective
           * perspective: 4000px; perspective-origin: 100% 0
           * transform-style: preserve-3d; contain: strict
           */}
          <div
            className="relative w-full h-full"
            style={{
              perspective: '4000px',
              perspectiveOrigin: '100% 0',
              transformStyle: 'preserve-3d',
              contain: 'strict',
            }}
          >
            {/*
             * .hero__illustration__base
             * absolute rounded-[10px] border border-[#1e1e1e] bg-[var(--color-bg-primary)]
             * w-[1600px] h-[900px]
             * mt-[100px] sm:mt-[280px] mb-auto ml-[1%] sm:ml-auto mr-auto
             * transform: translateX(2%) scale(1.2) rotateX(47deg) rotateY(31deg) rotate(324deg)
             * transform-origin: top left
             * mobile override: scale(0.7) rotateX(47deg) rotateY(21deg) rotate(330deg)
             */}
            <div
              className="hero-illustration-base absolute rounded-[10px] border border-[#1e1e1e] bg-[var(--color-bg-primary)]"
              style={{
                width: '1600px',
                height: '900px',
                marginTop: '280px',
                marginBottom: 'auto',
                marginLeft: '1%',
                marginRight: 'auto',
                transformOrigin: 'top left',
                backfaceVisibility: 'hidden',
                transformStyle: 'preserve-3d',
                transform:
                  'translateX(2%) scale(1.2) rotateX(47deg) rotateY(31deg) rotate(324deg)',
              }}
            >
              {/*
               * .hero__illustration__sidebar
               * w-[var(--Sidebar-width)] py-4 px-[14px]
               * transform-style: preserve-3d
               */}
              <div
                className="py-4 px-[14px]"
                style={{
                  width: '260px',
                  transformStyle: 'preserve-3d',
                }}
              >
                <Sidebar />
              </div>

              {/*
               * .hero__illustration__inbox
               * absolute left-[var(--Sidebar-width)] h-full
               * inset-block: 8px  (top/bottom 8px)
               *
               * ::after — fade-right gradient overlay
               *   background: linear-gradient(to right, transparent 80%, var(--color-bg-primary) 90%)
               *   absolute -inset-2
               */}
              <IllustrateAnimate
                delay={2.0}
                duration={1.4}
                className="absolute top-[8px] bottom-[8px]"
                style={
                  {
                    left: 'var(--Sidebar-width)',
                    right: 0,
                    overflow: 'visible',
                  } as React.CSSProperties
                }
              >
                <Image
                  src="/inbox.svg"
                  alt="Inbox panel"
                  width={1200}
                  height={900}
                  className="block h-full w-auto max-w-none"
                  priority
                />
              </IllustrateAnimate>
            </div>

            {/*
             * Mobile override for .hero__illustration__base
             * transform: scale(0.7) rotateX(47deg) rotateY(21deg) rotate(330deg)
             * Applied via a Tailwind-compatible sibling that overrides on mobile.
             * Since inline styles can't be responsive, we use a CSS var trick with a
             * <style> tag scoped to this section.
             */}
          </div>
        </div>
      </div>

      {/* Mobile transform override — injects responsive CSS for the base panel */}
      <style>{`
        @media (max-width: 640px) {
          .hero-illustration-base {
            margin-top: 100px !important;
            margin-left: 1% !important;
            transform: scale(0.7) rotateX(47deg) rotateY(21deg) rotate(330deg) !important;
          }
        }
      `}</style>
    </section>
  )
}

export default StackImagesSection