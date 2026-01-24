import React from 'react';

function App() {
  return (
    <div data-layer="Halle Home Page" className="HalleHomePage w-full min-h-screen flex flex-col items-start justify-start">
      {/* Hero Section with Navigation */}
      <div data-layer="Hero Section" className="HeroSection w-full min-h-28 relative bg-Brand-Colours-Black overflow-hidden flex flex-col items-start">
        <div data-layer="Navigation Bar Home Page" className="NavigationBarHomePage w-full max-w-[1440px] px-[80px] py-[30px] flex flex-row items-center gap-[140px]">
          <img data-layer="Halle Logo" className="HalleLogo w-[112px] h-[42px]" src="https://www.figma.com/api/mcp/asset/3def1da4-b3e2-41a2-8100-98f70dd1f537" alt="Halle Logo" />
          <div data-layer="Navbar Options" className="NavbarOptions flex flex-row items-center gap-[60px] text-[18px] text-center">
            <div data-layer="Buying" className="Buying text-center text-Brand-Colours-Blue text-base sm:text-lg font-medium font-['Poppins'] cursor-pointer hover:scale-110 transition-all duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-Brand-Colours-Blue">Buying</div>
            <div data-layer="Selling" className="Selling text-center text-Brand-Colours-White text-base sm:text-lg font-normal font-['Poppins'] cursor-pointer hover:text-Brand-Colours-Blue hover:scale-110 transition-all duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-Brand-Colours-Blue hover:after:w-full after:transition-all after:duration-300">Selling</div>
            <div data-layer="Letting" className="Letting text-center text-Brand-Colours-White text-base sm:text-lg font-normal font-['Poppins'] cursor-pointer hover:text-Brand-Colours-Blue hover:scale-110 transition-all duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-Brand-Colours-Blue hover:after:w-full after:transition-all after:duration-300">Letting</div>
            <div data-layer="Properties" className="Properties text-center text-Brand-Colours-White text-base sm:text-lg font-normal font-['Poppins'] cursor-pointer hover:text-Brand-Colours-Blue hover:scale-110 transition-all duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-Brand-Colours-Blue hover:after:w-full after:transition-all after:duration-300">Properties</div>
            <div data-layer="Contact" className="Contact text-center text-Brand-Colours-White text-base sm:text-lg font-normal font-['Poppins'] cursor-pointer hover:text-Brand-Colours-Blue hover:scale-110 transition-all duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-Brand-Colours-Blue hover:after:w-full after:transition-all after:duration-300">Contact</div>
          </div>
          <div data-layer="Nav Bar Button" className="NavBarButton bg-[#82c7be] flex h-[42px] items-center justify-center px-[20px] py-[10px] rounded-[20px] w-[194px]">
            <div data-layer="Book a Valuation" className="BookAValuation text-center text-white text-[18px] font-medium font-['Poppins'] whitespace-pre-wrap">Book a Valuation</div>
          </div>
        </div>
      </div>

      {/* Hero Content Section */}
      <div data-layer="Hero Section" className="HeroSection w-full bg-[var(--brand-colours\/black,#2a363a)] flex flex-col items-center overflow-clip pb-[50px] px-[80px] relative shrink-0">
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
          <div className="col-1 h-[764px] ml-0 mt-0 relative rounded-[20px] row-1 w-[1280px]">
            <img data-layer="Home Hero Image Overlay" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src="https://www.figma.com/api/mcp/asset/07ed833c-0729-4fd2-a872-20013b6a0167" alt="Hero" />
          </div>
          <div className="col-1 content-stretch flex flex-col gap-[60px] items-center ml-[80px] mt-[148px] relative row-1 w-[1120px]">
            <div className="content-stretch flex flex-col gap-[15px] items-center not-italic relative shrink-0 text-center text-white w-[982px] whitespace-pre-wrap">
              <p className="font-['Poppins:Bold',sans-serif] leading-[1.2] relative shrink-0 text-[66px] w-[986px]">Discover Quality Homes in Wolverhampton with Halle.</p>
              <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[22px] w-[812px]">Browse quality properties to rent, let, or buy - tailored to your lifestyle and investment goals.</p>
            </div>

            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
              <div className="bg-white col-1 h-[74px] ml-0 mt-0 rounded-[50px] row-1 w-[1120px]" />
              <div className="col-1 content-stretch flex gap-[41px] items-center ml-[40px] mt-[12px] relative row-1">
                {/* Payment Filter */}
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[124px]">
                  <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e1e1e] text-[12px] tracking-[-0.6px] w-full whitespace-pre-wrap">Payment</p>
                  <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full">
                    <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] tracking-[-0.8px] w-[64px] whitespace-pre-wrap">Lease</p>
                    <div className="relative shrink-0 size-[20px]">
                      <img alt="" className="block max-w-none size-full" src="https://www.figma.com/api/mcp/asset/d93fbe07-33a9-42e3-8d8b-6bdbc7f9bd35" />
                    </div>
                  </div>
                </div>
                {/* Divider */}
                <div className="bg-[var(--brand-colours\/black,#2a363a)] h-[50px] rounded-[20px] shrink-0 w-[2px]" />
                {/* Location Filter */}
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[124px]">
                  <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e1e1e] text-[12px] tracking-[-0.6px] w-full whitespace-pre-wrap">Location</p>
                  <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full">
                    <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] tracking-[-0.8px] w-[64px] whitespace-pre-wrap">All</p>
                    <div className="relative shrink-0 size-[20px]">
                      <img alt="" className="block max-w-none size-full" src="https://www.figma.com/api/mcp/asset/d93fbe07-33a9-42e3-8d8b-6bdbc7f9bd35" />
                    </div>
                  </div>
                </div>
                <div className="bg-[var(--brand-colours\/black,#2a363a)] h-[50px] rounded-[20px] shrink-0 w-[2px]" />
                {/* Property Type Filter */}
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[124px]">
                  <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e1e1e] text-[12px] tracking-[-0.6px] w-full whitespace-pre-wrap">Property Type</p>
                  <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full">
                    <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] tracking-[-0.8px] w-[64px] whitespace-pre-wrap">All</p>
                    <div className="relative shrink-0 size-[20px]">
                      <img alt="" className="block max-w-none size-full" src="https://www.figma.com/api/mcp/asset/d93fbe07-33a9-42e3-8d8b-6bdbc7f9bd35" />
                    </div>
                  </div>
                </div>
                <div className="bg-[var(--brand-colours\/black,#2a363a)] h-[50px] rounded-[20px] shrink-0 w-[2px]" />
                {/* Keyword Filter */}
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[124px]">
                  <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e1e1e] text-[12px] tracking-[-0.6px] w-full whitespace-pre-wrap">Keyword</p>
                  <div className="content-stretch flex items-center relative shrink-0 w-full">
                    <p className="font-['Poppins:Italic',sans-serif] italic leading-[normal] relative shrink-0 text-[#969696] text-[16px] tracking-[-0.8px] w-[124px] whitespace-pre-wrap">Building/Shop/...</p>
                  </div>
                </div>
                <div className="bg-[var(--brand-colours\/black,#2a363a)] h-[50px] rounded-[20px] shrink-0 w-[2px]" />
                {/* Price Filter */}
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[139px]">
                  <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e1e1e] text-[12px] tracking-[-0.6px] w-full whitespace-pre-wrap">Price</p>
                  <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full">
                    <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] tracking-[-0.8px] w-[82px] whitespace-pre-wrap">IDR/month</p>
                    <div className="relative shrink-0 size-[20px]">
                      <img alt="" className="block max-w-none size-full" src="https://www.figma.com/api/mcp/asset/d93fbe07-33a9-42e3-8d8b-6bdbc7f9bd35" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1 ml-[1058px] mt-[12px] relative row-1 size-[50px]">
                <div className="absolute inset-0">
                  <img alt="" className="block max-w-none size-full" src="https://www.figma.com/api/mcp/asset/80b11f9d-7bd8-45bf-b81d-6686b45e7767" />
                </div>
              </div>
            </div>

            <div className="content-stretch flex gap-[40px] items-center relative shrink-0">
              <div className="h-[30px] relative shrink-0 w-[150px]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[292%] left-[-19.71%] max-w-none top-[-94.93%] w-[139.13%]" src="https://www.figma.com/api/mcp/asset/2576b88e-e7da-4b23-bd9f-9378814706cf" />
                </div>
              </div>
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
                <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] ml-0 mt-0 relative row-1">
                  <div className="col-1 h-[25px] ml-0 mt-0 relative row-1 w-[137.857px]">
                    <img alt="" className="block max-w-none size-full" src="https://www.figma.com/api/mcp/asset/ceda340f-9b89-4806-8c4f-87c138f1e488" />
                  </div>
                </div>
              </div>
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
                <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] ml-0 mt-0 relative row-1">
                  <div className="col-1 h-[35px] ml-0 mt-0 relative row-1 w-[143.908px]">
                    <img alt="" className="block max-w-none size-full" src="https://www.figma.com/api/mcp/asset/13733ad1-6411-4714-a379-e4cc27d47abf" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ...existing code... */}
        <div className="w-full max-w-7xl flex flex-col justify-center items-center gap-8 lg:gap-12 text-center">
          <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-12 xl:gap-48 text-center">
            <div className="w-full lg:w-auto lg:max-w-[580px] text-Brand-Colours-Black text-3xl sm:text-4xl lg:text-5xl font-semibold font-['Poppins'] leading-tight text-center lg:text-left animate-slideUp">Discover Your Perfect Dream Property Today</div>
            <div className="w-full lg:w-auto lg:max-w-[496px] text-Brand-Colours-Black text-base lg:text-lg font-normal font-['Poppins'] text-center lg:text-left animate-fadeIn">Explore our hand picked selection of premium properties, featuring stunning designs, prime locations, and tailored details to match your lifestyle and needs. Find the perfect home or investment with ease.</div>
          </div>
          
          {/* Property Cards */}
          <div className="w-full">
            <div className="flex flex-col lg:flex-row justify-center items-center gap-5 flex-wrap">
              {/* Property Card 1 */}
              <div className="relative w-full sm:w-[400px] lg:w-[413px] h-[500px] sm:h-[520px] lg:h-[540px] group hover:scale-[1.03] transition-all duration-500 cursor-pointer">
                <img src="https://www.figma.com/api/mcp/asset/6a6db28a-8d23-457f-a3d2-fe3a058fd02f" alt="Property" className="w-full h-full rounded-[20px] shadow-lg group-hover:shadow-2xl transition-all duration-500 object-cover" />
                <div className="absolute bottom-5 left-5 right-5 p-5 bg-Brand-Colours-Black rounded-[20px] flex flex-col gap-3.5 backdrop-blur-sm bg-opacity-95">
                  <div className="flex justify-between items-center">
                    <div className="text-white text-xl lg:text-2xl font-semibold font-['Poppins']">£195,000</div>
                    <button className="w-12 h-7 bg-Brand-Colours-Blue rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200">
                      <svg width="14" height="12" viewBox="0 0 14 12" fill="none">
                        <path d="M7 12L1 6L7 0" stroke="white" strokeWidth="2"/>
                      </svg>
                    </button>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-white text-base font-semibold font-['Poppins']">Newport Street</div>
                    <div className="text-white text-base font-normal font-['Poppins']">Wolverhampton</div>
                  </div>
                  <div className="flex items-center gap-4 lg:gap-12 flex-wrap">
                    <div className="text-white text-sm lg:text-base font-normal font-['Poppins']">1,800 Sq. Ft.</div>
                    <div className="w-px h-10 bg-white hidden sm:block"></div>
                    <div className="text-white text-sm lg:text-base font-normal font-['Poppins']">3 Beds</div>
                    <div className="w-px h-10 bg-white hidden sm:block"></div>
                    <div className="text-white text-sm lg:text-base font-normal font-['Poppins']">2 Baths</div>
                  </div>
                </div>
              </div>

              {/* Property Card 2 */}
              <div className="relative w-full sm:w-[400px] lg:w-[413px] h-[500px] sm:h-[520px] lg:h-[540px] group hover:scale-[1.03] transition-all duration-500 cursor-pointer">
                <img src="https://www.figma.com/api/mcp/asset/df1f9c39-b9ef-44e9-bc2c-eadc5996339a" alt="Property" className="w-full h-full rounded-[20px] shadow-lg group-hover:shadow-2xl transition-all duration-500 object-cover" />
                <div className="absolute bottom-5 left-5 right-5 p-5 bg-Brand-Colours-Black rounded-[20px] flex flex-col gap-3.5 backdrop-blur-sm bg-opacity-95">
                  <div className="flex justify-between items-center">
                    <div className="text-white text-xl lg:text-2xl font-semibold font-['Poppins']">£165,500</div>
                    <button className="w-12 h-7 bg-Brand-Colours-Blue rounded-full hover:scale-110 transition-transform duration-200"></button>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-white text-base font-semibold font-['Poppins']">Newport Street</div>
                    <div className="text-white text-base font-normal font-['Poppins']">Wolverhampton</div>
                  </div>
                  <div className="flex items-center gap-4 lg:gap-12 flex-wrap">
                    <div className="text-white text-sm lg:text-base font-normal font-['Poppins']">1,200 Sq. Ft.</div>
                    <div className="w-px h-10 bg-white hidden sm:block"></div>
                    <div className="text-white text-sm lg:text-base font-normal font-['Poppins']">2 Beds</div>
                    <div className="w-px h-10 bg-white hidden sm:block"></div>
                    <div className="text-white text-sm lg:text-base font-normal font-['Poppins']">2 Baths</div>
                  </div>
                </div>
              </div>

              {/* Property Card 3 */}
              <div className="relative w-full sm:w-[400px] lg:w-[413px] h-[500px] sm:h-[520px] lg:h-[540px] group hover:scale-[1.03] transition-all duration-500 cursor-pointer">
                <img src="https://www.figma.com/api/mcp/asset/b0ef0b17-3980-4cd3-b1e9-ff7d50f4043c" alt="Property" className="w-full h-full rounded-[20px] shadow-lg group-hover:shadow-2xl transition-all duration-500 object-cover" />
                <div className="absolute bottom-5 left-5 right-5 p-5 bg-Brand-Colours-Black rounded-[20px] flex flex-col gap-3.5 backdrop-blur-sm bg-opacity-95">
                  <div className="flex justify-between items-center">
                    <div className="text-white text-xl lg:text-2xl font-semibold font-['Poppins']">£250,875</div>
                    <button className="w-12 h-7 bg-Brand-Colours-Blue rounded-full hover:scale-110 transition-transform duration-200"></button>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-white text-base font-semibold font-['Poppins']">Newport Street</div>
                    <div className="text-white text-base font-normal font-['Poppins']">Wolverhampton</div>
                  </div>
                  <div className="flex items-center gap-4 lg:gap-12 flex-wrap">
                    <div className="text-white text-sm lg:text-base font-normal font-['Poppins']">3,200 Sq. Ft.</div>
                    <div className="w-px h-10 bg-white hidden sm:block"></div>
                    <div className="text-white text-sm lg:text-base font-normal font-['Poppins']">4 Beds</div>
                    <div className="w-px h-10 bg-white hidden sm:block"></div>
                    <div className="text-white text-sm lg:text-base font-normal font-['Poppins']">3 Baths</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* View More Button */}
            <button className="w-full sm:w-80 mx-auto mt-8 lg:mt-14 px-6 py-3 lg:py-4 bg-Brand-Colours-Blue rounded-[53px] text-center text-neutral-50 text-lg lg:text-xl font-semibold font-['Poppins'] hover:scale-110 hover:shadow-2xl hover:brightness-110 transition-all duration-300 cursor-pointer">
              View More Properties
            </button>
          </div>
        </div>
      {/* About Us Section */}
      <div className="w-full bg-[#dadddc] flex flex-row items-center justify-center px-[80px] py-[99px] gap-[80px]">
        <img src="https://www.figma.com/api/mcp/asset/a919bc6c-2b59-4936-a6a3-af5cf5c816cb" alt="About Us" className="w-[585px] h-[637px] rounded-[20px] shadow-lg object-cover" />
        <div className="flex flex-col gap-[35px] items-start justify-center w-[615px]">
          <div className="flex flex-col gap-[20px] items-start">
            <div className="text-[#2a363a] text-[50px] font-semibold leading-[1.2]">Why Halle Is Your Best Property Partner</div>
            <div className="text-[#2a363a] text-[18px] font-normal leading-normal">At Halle, we’re trusted estate agents in Wolverhampton and Willenhall. With __ years of experience, we deliver quality properties and personalised service to guide you every step of the way.</div>
          </div>
          <div className="flex flex-col gap-[20px] w-full">
            <div className="bg-white flex items-center px-[26px] py-[10px] rounded-[20px] shadow-md w-full">
              <div className="text-[#82c7be] text-[40px] font-medium w-[60px]">01</div>
              <div className="text-[#2a363a] text-[16px] font-normal w-[495px]">
                <span className="font-semibold">__+ Years of Experience</span><br />A proven track record of excellence in real estate.
              </div>
            </div>
            <div className="bg-white flex items-center px-[26px] py-[10px] rounded-[20px] shadow-md w-full">
              <div className="text-[#82c7be] text-[40px] font-medium w-[60px]">02</div>
              <div className="text-[#2a363a] text-[16px] font-normal w-[495px]">
                <span className="font-semibold">Trusted by Thousands of Clients</span><br />Building lasting relationships with homeowners and investors.
              </div>
            </div>
            <div className="bg-white flex items-center px-[26px] py-[10px] rounded-[20px] shadow-md w-full">
              <div className="text-[#82c7be] text-[40px] font-medium w-[60px]">03</div>
              <div className="text-[#2a363a] text-[16px] font-normal w-[495px]">
                <span className="font-semibold">Wide Range of Properties</span><br />A wide range of homes across Willenhall & Wolverhampton.
              </div>
            </div>
            <div className="bg-white flex items-center px-[26px] py-[10px] rounded-[20px] shadow-md w-full">
              <div className="text-[#82c7be] text-[40px] font-medium w-[60px]">04</div>
              <div className="text-[#2a363a] text-[16px] font-normal w-[495px]">
                <span className="font-semibold">Exceptional Customer Support</span><br />Dedicated to personalised, seamless service.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="w-full bg-[#2a363a] flex flex-col items-center justify-center gap-[90px] px-[121px] py-[118px]">
        <div className="text-white text-[60px] font-semibold text-center w-[908px]">Our Key Services</div>
        <div className="flex flex-row gap-[130px] items-center justify-center w-full">
          <div className="flex flex-col gap-[44px] items-center justify-center w-[202px]">
            <div className="h-[202px] w-[202px] relative">
              <img src="https://www.figma.com/api/mcp/asset/b485bf5a-0f0e-414b-84c3-382bf1ccaf8f" alt="Ellipse" className="absolute inset-0 w-full h-full" />
              <img src="https://www.figma.com/api/mcp/asset/11cd0029-147a-40b7-80b4-90fc1d287273" alt="House Search" className="absolute left-[45px] top-[48px] w-[112px] h-[105px]" />
            </div>
            <div className="text-white text-[30px] text-center w-[150px]">Book a Valuation</div>
          </div>
          <div className="flex flex-col gap-[44px] items-center justify-center w-[202px]">
            <div className="h-[202px] w-[202px] relative">
              <img src="https://www.figma.com/api/mcp/asset/b485bf5a-0f0e-414b-84c3-382bf1ccaf8f" alt="Ellipse" className="absolute inset-0 w-full h-full" />
              <img src="https://www.figma.com/api/mcp/asset/56515868-31ab-483e-b2f6-8cf29ca3ab74" alt="Renting Letting" className="absolute left-[45px] top-[48px] w-[112px] h-[105px]" />
            </div>
            <div className="text-white text-[30px] text-center w-[150px]">Renting & Letting</div>
          </div>
          <div className="flex flex-col gap-[44px] items-center justify-center w-[202px]">
            <div className="h-[202px] w-[202px] relative">
              <img src="https://www.figma.com/api/mcp/asset/b485bf5a-0f0e-414b-84c3-382bf1ccaf8f" alt="Ellipse" className="absolute inset-0 w-full h-full" />
              <img src="https://www.figma.com/api/mcp/asset/6d34490b-c33a-4992-8001-747142c38075" alt="Buying House" className="absolute left-[45px] top-[48px] w-[112px] h-[105px]" />
            </div>
            <div className="text-white text-[30px] text-center w-[150px]">Buying a Property</div>
          </div>
          <div className="flex flex-col gap-[44px] items-center justify-center w-[202px]">
            <div className="h-[202px] w-[202px] relative">
              <img src="https://www.figma.com/api/mcp/asset/b485bf5a-0f0e-414b-84c3-382bf1ccaf8f" alt="Ellipse" className="absolute inset-0 w-full h-full" />
              <img src="https://www.figma.com/api/mcp/asset/8e650ce2-d156-480c-bbc6-964650c056b1" alt="Sale Sign" className="absolute left-[45px] top-[48px] w-[112px] h-[105px]" />
            </div>
            <div className="text-white text-[30px] text-center w-[150px]">Selling a Property</div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="w-full bg-white flex flex-col items-center py-[80px]">
        <div className="text-[#2a363a] text-[50px] font-semibold text-center mb-2">Here's What Our Satisfied Clients Have to Say About Us</div>
        <div className="text-[#1e1e1e] text-[18px] text-center mb-[50px]">Here's what our happy clients have to say about their experience with Halle. From finding their dream home to seamless transactions, your satisfaction is our priority.</div>
        <div className="flex flex-row gap-[40px] items-start justify-center w-full max-w-[1200px]">
          {[1,2,3].map((_,i) => (
            <div key={i} className="bg-white rounded-[20px] shadow-[0px_10px_30px_0px_rgba(0,0,0,0.25)] w-[413px] h-[210px] flex flex-col gap-[20px] p-[40px]">
              <div className="text-[#1e1e1e] text-[16px]">Great experience with Halle. Jatinder went out of his way to accommodate me and was genuinely friendly. Excellent service!</div>
              <div className="flex flex-row items-center justify-between w-full">
                <div className="flex flex-col gap-[4px]">
                  <div className="text-[#82c7be] text-[16px] font-semibold">Stephanie Wallis</div>
                  <div className="flex flex-row gap-[4px]">
                    {[...Array(5)].map((_,i) => (
                      <img key={i} src="https://www.figma.com/api/mcp/asset/a06f934a-0c62-49cd-a5f9-0ba602ce9f4d" alt="star" className="w-[24px] h-[24px]" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA, Blog, FAQ, and Footer sections would continue here... */}
      {/* Due to length, I'll create a separate component file */}
      {/* ...existing code... */}
    </div>
  );
}

export default App;
