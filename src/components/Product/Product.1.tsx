export default function Product() {
  function reveal() {
    const reveals = document.querySelectorAll('.reveal')

    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight
      const elementTop = reveals[i].getBoundingClientRect().top
      const elementVisible = 150

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('active')
      } else {
        reveals[i].classList.remove('active')
      }
    }
  }

  window.addEventListener('scroll', reveal)

  return (
    <>
      <div id='home' className='bg-[#060628] lg:mx-8'>
        <div className='h-[530px] bg-transparent bg-[url(./src/assets/image_1.jpeg)] bg-cover bg-bottom bg-no-repeat'>
          <div className='flex h-full w-full flex-col items-center justify-center gap-6 bg-gray-900/40 text-white'>
            <div className='text-xs font-semibold tracking-widest opacity-80'>BEST PLACE TO BUY DESIGN</div>
            <div className='text-5xl'>Coffee Mugs</div>
            <div className='text-center text-lg'>
              The most versatile furniture system ever created. Designed to fit your life, made to move and grow.
            </div>
            <button className='bg-white px-10 py-4 text-sm font-medium uppercase text-gray-900 hover:bg-opacity-95 hover:shadow-sm'>
              Explore our products
            </button>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='mx-auto flex w-full flex-col items-center justify-center gap-8 px-2 lg:w-1/2'>
          <h2 className='pt-12 text-center text-2xl font-normal leading-relaxed lg:text-3xl'>
            Even the all-powerful Pointing has no control about the blind texts.
          </h2>
          <span className='text-center text-sm font-normal leading-loose tracking-wider text-gray-500'>
            It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the
            all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day
            however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
          </span>
          <div className='border-b-[2px] border-b-[#f4ece8] text-base text-[#a25f4b] hover:border-b-[#a25f4b] hover:text-[#743f2f] hover:transition-all hover:duration-700 hover:ease-in-out'>
            Read the full Story
          </div>
          <div className='mt-16 flex flex-row items-center justify-center'>
            <div className='h-[1px] w-8 bg-gray-200' />
            <div className='mx-4 text-xs font-bold uppercase tracking-widest text-gray-500'>FEATURED MUGS</div>
            <div className='h-[1px] w-8 bg-gray-200' />

            <div />
          </div>
        </div>
      </div>
      <div id='feature' className='reveal mx-auto mt-24 w-[85%] lg:w-[75%]'>
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
          <div className='product-card'>
            <div className='h-[440px] bg-[url(https://assets-global.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a512bece011_liana-mikah-698524-unsplash.jpg)] bg-cover bg-center bg-no-repeat sm:h-[540px]'>
              <div className='group relative h-full w-full hover:bg-gray-900/10 hover:transition-all hover:duration-300 hover:ease-in-out'>
                <div className='absolute right-3 top-3 w-[100px] bg-white px-4 py-2 text-center font-semibold capitalize text-[#a25f4b]'>
                  On sale.
                </div>
                <div className='absolute bottom-4 left-[50%] hidden w-11/12 -translate-x-1/2 cursor-pointer  items-center bg-white px-8 py-4 text-center text-sm font-medium uppercase tracking-wider text-gray-900 hover:bg-opacity-95 group-hover:block group-hover:animate-fadeIn'>
                  read the full story
                </div>
              </div>
            </div>
            <div className='mt-4 flex flex-col gap-4 text-center'>
              <div className='text-lg'>Pink Premium Ceramic</div>
              <div className='text-gray-500'>$ 99.00 USD</div>
            </div>
          </div>
          <div className='product-card'>
            <div className='h-[440px] bg-[url(https://assets-global.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a25acecdfd6_jakub-dziubak-394720-unsplash.jpg)] bg-cover bg-center bg-no-repeat sm:h-[540px]'>
              <div className='group relative flex h-full w-full items-center justify-center hover:bg-gray-900/10 hover:transition-all hover:duration-300 hover:ease-in-out'>
                <div className='absolute right-3 top-3 w-[100px] bg-white px-4 py-2 text-center font-semibold capitalize text-[#a25f4b]'>
                  On sale.
                </div>
                <div className='absolute bottom-4 left-[50%] hidden w-11/12 -translate-x-1/2 cursor-pointer  items-center bg-white px-8 py-4 text-center text-sm font-medium uppercase tracking-wider text-gray-900 hover:bg-opacity-95 group-hover:block group-hover:animate-fadeIn'>
                  explore mug
                </div>
              </div>
            </div>
            <div className='mt-4 flex flex-col items-center gap-4 text-center'>
              <div className='text-lg'>Pink Premium Ceramic</div>
              <div className='flex flex-row items-center justify-center gap-2'>
                <div className='text-lg font-medium text-[#a25f4b]'>$50.00</div>
                <div className='text-gray-500 line-through'>$ 99.00 USD</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='my-16 flex flex-row items-center justify-center'>
        <div className='h-[1px] w-8 bg-gray-200 ' />
        <div className='mx-1 px-2 py-4 text-center text-xs font-bold uppercase tracking-widest text-gray-500 lg:mx-4 lg:px-8'>
          MORE PRODUCTS
        </div>
        <div className='h-[1px] w-8 bg-gray-200' />

        <div />
      </div>
      <div id='productlist' className='reveal mx-auto w-[90%] lg:w-[80%]'>
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
          <div className='product-card'>
            <div className='h-[380px] bg-[url(https://assets-global.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a6173ece01a_trent-erwin-570303-unsplash.jpg)] bg-cover bg-center bg-no-repeat'>
              <div className='group relative flex h-full w-full items-center justify-center hover:bg-gray-900/10 hover:transition-all hover:duration-300 hover:ease-in-out'>
                <div className='absolute right-3 top-3 w-[100px] bg-white px-4 py-2 text-center font-semibold capitalize text-[#a25f4b]'>
                  On sale.
                </div>
                <div className='absolute bottom-4 left-[50%] hidden w-11/12 -translate-x-1/2 cursor-pointer  items-center bg-white px-8 py-4 text-center text-sm font-medium uppercase tracking-wider text-gray-900 hover:bg-opacity-95 group-hover:block group-hover:animate-fadeIn'>
                  explore mug
                </div>
              </div>
            </div>
            <div className='mt-4 flex flex-col items-center gap-4 text-center'>
              <div className='text-lg'>Red Love Cup</div>
              <div className='flex flex-row items-center justify-center gap-2'>
                <div className='text-lg font-medium text-[#a25f4b]'>$25.00</div>
                <div className='text-gray-500 line-through'>$ 37.00 USD</div>
              </div>
            </div>
          </div>
          <div className='product-card'>
            <div className='h-[380px] bg-[url(https://assets-global.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a0c09ece01c_steve-harvey-523112-unsplash.jpg)] bg-cover bg-center bg-no-repeat'>
              <div className='group relative flex h-full w-full items-center justify-center hover:bg-gray-900/10 hover:transition-all hover:duration-300 hover:ease-in-out'>
                <div className='absolute bottom-4 left-[50%] hidden w-11/12 -translate-x-1/2 cursor-pointer  items-center bg-white px-8 py-4 text-center text-sm font-medium uppercase tracking-wider text-gray-900 hover:bg-opacity-95 group-hover:block group-hover:animate-fadeIn'>
                  explore mug
                </div>
              </div>
            </div>
            <div className='mt-4 flex flex-col items-center gap-4 text-center'>
              <div className='text-lg'>Black Tea Cup</div>
              <div className='flex flex-row items-center justify-center gap-2'>
                <div className='text-lg font-medium text-[#a25f4b]'>$40.00</div>
                <div className='text-gray-500 line-through'>$ 57.00 USD</div>
              </div>
            </div>
          </div>
          <div className='product-card'>
            <div className='h-[380px] bg-[url(https://assets-global.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a223decdff8_ronaldo-arthur-vidal-66241-unsplash.jpg)] bg-cover bg-center bg-no-repeat'>
              <div className='group relative flex h-full w-full items-center justify-center hover:bg-gray-900/10 hover:transition-all hover:duration-300 hover:ease-in-out'>
                <div className='absolute bottom-4 left-[50%] hidden w-11/12 -translate-x-1/2 cursor-pointer  items-center bg-white px-8 py-4 text-center text-sm font-medium uppercase tracking-wider text-gray-900 hover:bg-opacity-95 group-hover:block group-hover:animate-fadeIn'>
                  explore mug
                </div>
              </div>
            </div>
            <div className='mt-4 flex flex-col items-center gap-4 text-center'>
              <div className='text-lg'>B&W Essentials Mug</div>
              <div className='flex flex-row items-center justify-center gap-2'>
                <div className='text-lg font-medium text-[#a25f4b]'>$19.00</div>
                <div className='text-gray-500 line-through'>$ 25.00 USD</div>
              </div>
            </div>
          </div>
          <div className='product-card'>
            <div className='h-[380px] bg-[url(https://assets-global.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a81a6ecdfe7_levi-guzman-1077850-unsplash.jpg)] bg-cover bg-center bg-no-repeat'>
              <div className='group relative flex h-full w-full items-center justify-center hover:bg-gray-900/10 hover:transition-all hover:duration-300 hover:ease-in-out'>
                <div className='absolute bottom-4 left-[50%] hidden w-11/12 -translate-x-1/2 cursor-pointer  items-center bg-white px-8 py-4 text-center text-sm font-medium uppercase tracking-wider text-gray-900 hover:bg-opacity-95 group-hover:block group-hover:animate-fadeIn'>
                  explore mug
                </div>
              </div>
            </div>
            <div className='mt-4 flex flex-col items-center gap-4 text-center'>
              <div className='text-lg'>Espresso Cup by Mugs.co</div>
              <div className='flex flex-row items-center justify-center gap-2'>
                <div className='text-gray-500 line-through'>$ 28.00 USD</div>
              </div>
            </div>
          </div>
          <div className='product-card'>
            <div className='h-[380px] bg-[url(https://assets-global.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a1db2ece009_natanja-grun-600152-unsplash.jpg)] bg-cover bg-center bg-no-repeat'>
              <div className='group relative flex h-full w-full items-center justify-center hover:bg-gray-900/10 hover:transition-all hover:duration-300 hover:ease-in-out'>
                <div className='absolute bottom-4 left-[50%] hidden w-11/12 -translate-x-1/2 cursor-pointer  items-center bg-white px-8 py-4 text-center text-sm font-medium uppercase tracking-wider text-gray-900 hover:bg-opacity-95 group-hover:block group-hover:animate-fadeIn'>
                  explore mug
                </div>
              </div>
            </div>
            <div className='mt-4 flex flex-col items-center gap-4 text-center'>
              <div className='text-lg'>Winter Style M</div>
              <div className='flex flex-row items-center justify-center gap-2'>
                <div className='text-gray-500'>$ 99.00 USD</div>
              </div>
            </div>
          </div>
          <div className='product-card'>
            <div className='h-[380px] bg-[url(https://assets-global.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a8461ece016_nathan-dumlao-643391-unsplash.jpg)] bg-cover bg-center bg-no-repeat'>
              <div className='group relative flex h-full w-full items-center justify-center hover:bg-gray-900/10 hover:transition-all hover:duration-300 hover:ease-in-out'>
                <div className='absolute bottom-4 left-[50%] hidden w-11/12 -translate-x-1/2 cursor-pointer  items-center bg-white px-8 py-4 text-center text-sm font-medium uppercase tracking-wider text-gray-900 hover:bg-opacity-95 group-hover:block group-hover:animate-fadeIn'>
                  explore mug
                </div>
              </div>
            </div>
            <div className='mt-4 flex flex-col items-center gap-4 text-center'>
              <div className='text-lg'>Ceramic Tea</div>
              <div className='flex flex-row items-center justify-center gap-2'>
                <div className='text-gray-500'>$ 99.00 USD</div>
              </div>
            </div>
          </div>
          <div className='product-card'>
            <div className='h-[380px] bg-[url(https://assets-global.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7ae493ece012_rawpixel-645289-unsplash.jpg)] bg-cover bg-center bg-no-repeat'>
              <div className='group relative flex h-full w-full items-center justify-center hover:bg-gray-900/10 hover:transition-all hover:duration-300 hover:ease-in-out'>
                <div className='absolute bottom-4 left-[50%] hidden w-11/12 -translate-x-1/2 cursor-pointer  items-center bg-white px-8 py-4 text-center text-sm font-medium uppercase tracking-wider text-gray-900 hover:bg-opacity-95 group-hover:block group-hover:animate-fadeIn'>
                  explore mug
                </div>
              </div>
            </div>
            <div className='mt-4 flex flex-col items-center gap-4 text-center'>
              <div className='text-lg'>No Handle Bar Cup</div>
              <div className='flex flex-row items-center justify-center gap-2'>
                <div className='text-gray-500'>$ 99.00 USD</div>
              </div>
            </div>
          </div>
          <div className='product-card'>
            <div className='h-[380px] bg-[url(https://assets-global.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a25acecdfd6_jakub-dziubak-394720-unsplash.jpg)] bg-cover bg-center bg-no-repeat'>
              <div className='group relative flex h-full w-full items-center justify-center hover:bg-gray-900/10 hover:transition-all hover:duration-300 hover:ease-in-out'>
                <div className='absolute bottom-4 left-[50%] hidden w-11/12 -translate-x-1/2 cursor-pointer  items-center bg-white px-8 py-4 text-center text-sm font-medium uppercase tracking-wider text-gray-900 hover:bg-opacity-95 group-hover:block group-hover:animate-fadeIn'>
                  explore mug
                </div>
              </div>
            </div>
            <div className='mt-4 flex flex-col items-center gap-4 text-center'>
              <div className='text-lg'>Golden Designers Mug</div>
              <div className='flex flex-row items-center justify-center gap-2'>
                <div className='text-lg font-medium text-[#a25f4b]'>$50.00</div>
                <div className='text-gray-500 line-through'>$ 99.00 USD</div>
              </div>
            </div>
          </div>

          <div className='product-card'>
            <div className='h-[380px] bg-[url(https://assets-global.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a512bece011_liana-mikah-698524-unsplash.jpg)] bg-cover bg-center bg-no-repeat'>
              <div className='group relative flex h-full w-full items-center justify-center hover:bg-gray-900/10 hover:transition-all hover:duration-300 hover:ease-in-out'>
                <div className='absolute bottom-4 left-[50%] hidden w-11/12 -translate-x-1/2 cursor-pointer  items-center bg-white px-8 py-4 text-center text-sm font-medium uppercase tracking-wider text-gray-900 hover:bg-opacity-95 group-hover:block group-hover:animate-fadeIn'>
                  explore mug
                </div>
              </div>
            </div>
            <div className='mt-4 flex flex-col items-center gap-4 text-center'>
              <div className='text-lg'>Pink Premium Ceramic</div>
              <div className='flex flex-row items-center justify-center gap-2'>
                <div className='text-gray-500'>$ 99.00 USD</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='promotion' className='mt-16 flex flex-row items-center justify-center'>
        <div className='h-[1px] w-8 bg-gray-200 ' />
        <div className='mx-1 px-2 py-4 text-center text-xs font-bold uppercase tracking-widest text-gray-500 lg:mx-4 lg:px-8'>
          BUY 2 MUGS AND GET A COFFEE MAGAZINE FREE
        </div>
        <div className='h-[1px] w-8 bg-gray-200' />

        <div />
      </div>

      <div className='reveal mx-auto my-16 w-full gap-6 px-2 xl:w-[65%]'>
        <div className='flex flex-col items-center justify-center gap-4 lg:flex-row-reverse'>
          <div className='mb-5 h-full w-full basis-1/2 flex-col gap-4 xs:w-full md:mb-0 md:flex md:w-[50%] md:flex-row'>
            <div className='mb-3 h-[280px] basis-2/3 bg-[url(https://assets.website-files.com/5be96251aaba7a7b19ecdf69/5be96251aaba7a2f3decdfa9_Image.jpg)] bg-cover bg-center bg-no-repeat xs:mb-4 md:mb-0'></div>
            <div className='flex basis-1/3 flex-row gap-3 xs:gap-4 md:flex-col'>
              <div className='h-[130px] basis-1/2 bg-[url(https://assets.website-files.com/5be96251aaba7a7b19ecdf69/5be96251aaba7aa6d0ecdfa7_Image%202.jpg)] bg-cover bg-center bg-no-repeat xs:h-[200px] md:h-[130px]'></div>
              <div
                className='h-[130px] basis-1/2 bg-[url(https://assets.website-files.com/5be96251aaba7a7b19ecdf69/5be96251aaba7a528fecdfa6_Image.jpg)] bg-cover
bg-center bg-no-repeat xs:h-[200px] md:h-[130px]'
              ></div>
            </div>
          </div>
          <div className='mt-16 flex basis-1/2 flex-col items-center gap-4 text-center lg:ml-12 lg:items-start lg:text-left'>
            <div className='text-xs font-medium uppercase tracking-widest text-gray-500'>PREMIUM OFFER</div>
            <div className='text-4xl font-normal capitalize text-gray-900'>Get our Coffee Magazine</div>
            <div>
              <div className='mb-2 font-medium tracking-wider text-gray-500'>
                The most versatile furniture system ever created.
              </div>
              <div className='mb-2 text-base font-medium tracking-wide text-gray-500'>Designed to fit your life.</div>
            </div>
            <button className='bg-gray-900 px-10 py-4 text-sm uppercase tracking-wider text-white'>
              START SHOPPING
            </button>
          </div>
        </div>
      </div>
      <div className='h-[300px] bg-[url(https://assets.website-files.com/5be96251aaba7a7b19ecdf69/5be96251aaba7ac1c6ecdfd2_Section%20Image%202.jpg)] bg-cover bg-fixed bg-center bg-no-repeat md:h-[340px]'></div>
      <div id='blog' className='my-16 flex flex-row items-center justify-center'>
        <div className='h-[1px] w-8 bg-gray-200 ' />
        <div className='mx-1 px-2 py-4 text-center text-xs font-bold uppercase tracking-widest text-gray-500 lg:mx-4 lg:px-8'>
          BEHIND THE MUGS, LIFESTYLE STORIES
        </div>
        <div className='h-[1px] w-8 bg-gray-200' />
        <div />
      </div>
      <div className='reveal mx-auto w-[95%] lg:w-[65%]'>
        <div className='md:5 grid grid-cols-1 gap-10 md:grid-cols-4 lg:grid-cols-3'>
          <div className='product-card px-4 md:col-span-2 lg:col-span-1  lg:px-0'>
            <div className='h-[300px] bg-[url(https://assets-global.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a4ce6ece036_bar-cafe-caffeine-1002740.jpg)] bg-cover bg-center bg-no-repeat'>
              <div className='group relative h-full w-full hover:bg-gray-900/10 hover:transition-all hover:duration-300 hover:ease-in-out'>
                <div className='absolute bottom-4 left-[50%] hidden w-11/12 -translate-x-1/2 cursor-pointer  items-center bg-white px-8 py-4 text-center text-sm font-medium uppercase tracking-wider text-gray-900 hover:bg-opacity-95 group-hover:block group-hover:animate-fadeIn'>
                  read the full story
                </div>
              </div>
            </div>
            <div className='mt-4 flex flex-col gap-4 text-center lg:text-left'>
              <div className='mt-2 text-xl'>Health Check: why do I get a headache when I haven’t had my coffee?</div>
              <div className='text-base text-gray-600'>
                It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
              </div>
              <div className='text-xs font-medium tracking-widest text-gray-600'>OCTOBER 9, 2018</div>
            </div>
          </div>
          <div className='product-card px-4 md:col-span-2 lg:col-span-1 lg:px-0'>
            <div className='h-[300px] bg-[url(https://assets-global.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a481bece02f_Blog%20Pic%20Head%201.jpg)] bg-cover bg-center bg-no-repeat'>
              <div className='group relative h-full w-full hover:bg-gray-900/10 hover:transition-all hover:duration-300 hover:ease-in-out'>
                <div className='absolute bottom-4 left-[50%] hidden w-11/12 -translate-x-1/2 cursor-pointer  items-center bg-white px-8 py-4 text-center text-sm font-medium uppercase tracking-wider text-gray-900 hover:bg-opacity-95 group-hover:block group-hover:animate-fadeIn'>
                  read the full story
                </div>
              </div>
            </div>
            <div className='mt-4 flex flex-col gap-4 text-center lg:text-left'>
              <div className='mt-2 text-xl'>How long does a cup of coffee keep you awake?</div>
              <div className='text-base text-gray-600'>
                It is a paradisematic country, in which roasted parts. Vel qui et ad voluptatem.
              </div>
              <div className='text-xs font-medium tracking-widest text-gray-600'>OCTOBER 9, 2018</div>
            </div>
          </div>
          <div className='product-card px-4 md:col-span-2 md:col-start-2 md:col-end-4 lg:col-span-1 lg:px-0'>
            <div className='h-[300px] bg-[url(https://assets-global.website-files.com/5be96251aaba7a84f6ecdf81/5be96251aaba7a5e47ece03c_Blog%20Pic%20Head%208.jpg)] bg-cover bg-center bg-no-repeat'>
              <div className='group relative h-full w-full hover:bg-gray-900/10 hover:transition-all hover:duration-300 hover:ease-in-out'>
                <div className='absolute bottom-4 left-[50%] hidden w-11/12 -translate-x-1/2 cursor-pointer  items-center bg-white px-8 py-4 text-center text-sm font-medium uppercase tracking-wider text-gray-900 hover:bg-opacity-95 group-hover:block group-hover:animate-fadeIn'>
                  read the full story
                </div>
              </div>
            </div>
            <div className='mt-4 flex flex-col gap-4 text-center lg:text-left'>
              <div className='mt-2 text-xl'>
                Recent research suggests that heavy coffee drinkers may reap health benefits.
              </div>
              <div className='text-base text-gray-600'>
                It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
              </div>
              <div className='text-xs font-medium tracking-widest text-gray-600'>OCTOBER 9, 2018</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
