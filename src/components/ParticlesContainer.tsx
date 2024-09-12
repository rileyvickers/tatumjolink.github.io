import React from 'react'
import Particles from 'react-tsparticles'
import type { Engine } from 'tsparticles-engine'
import { loadSlim } from 'tsparticles-slim'

const particleStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
} as React.CSSProperties

export class ParticlesContainer extends React.Component {

  async customInit(engine: Engine): Promise<void> {
    // this adds the bundle to tsParticles
    await loadSlim(engine);
  }

  render() {
    return(
      <>
        <Particles
          style={particleStyle}
          init={this.customInit}
          id="tsparticles"
          options={{
            fullScreen: false,
            fpsLimit: 120,
            interactivity: {
              detectsOn: "window",
              events: {
                onClick: {
                  enable: true,
                  mode: 'push'
                },
                "onHover": {
                  "enable": true,
                  "mode": "bubble",
                  "parallax": {
                    "enable": false,
                    "force": 2,
                    "smooth": 10
                  }
                }
              },
              modes: {
                push: {
                  quantity: 3
                },
                grab: {
                  distance: 50,
                  line_linked: {
                    opacity: 0.1
                  }
                },
                "repulse": {
                  "distance": 200,
                  "duration": 0.8,
                  "factor": 100,
                  "speed": 1,
                  "maxSpeed": 50,
                  "easing": "ease-out-quad"
                },
                slow: {
                  factor: 10,
                  radius: 150
                },
                bubble: {
                  "distance": 40,
                  "duration": 2,
                  "mix": false,
                  "opacity": 8,
                  "size": 20
                }
              }
            },
            // background: {
            //   color: {
            //     value: "#00274C",
            //   }
            // },
            particles: {
              color: {
                value: '#ffffff'
              },
              links: {
                color: '#ffffff',
                distance: 75,
                enable: true,
                opacity: 1,
                width: 1
              },
              collisions: {
                absorb: {
                  speed: 1
                },
                maxSpeed: 50,
                enable: true
              },
              move: {
                drift: .01,
                direction: 'top',
                enable: true,
                outModes: {
                  default: 'out'
                },
                decay: .0001,
                random: false,
                speed: 2,
                straight: false
              },
              number: {
                density: {
                  enable: true,
                  area: 800
                },
                value: 100
              },
              opacity: {
                value: 1
              },
              "shape": {
                "type": "images",
                "options": {
                  "images": {
                    "src": "/logo512.png",
                    "width": 250,
                    "height": 250
                  }
                }
              },
              size: {
                // random: true,
                value: {
                  min: 5,
                  max: 15
                }
              }
            },
            detectRetina: true
          }}
        />
      </>
    )
  }
}