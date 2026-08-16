import React from 'react';

function App() {
  return (
    <div data-layer="Halle Home Page" className="HalleHomePage w-full min-h-screen flex flex-col items-center justify-start">
      {/* Hero Section with Navigation */}
      <div data-layer="Hero Section" className="HeroSection w-full min-h-28 relative bg-Brand-Colours-Black overflow-hidden flex flex-col items-center">
        <div data-layer="Navigation Bar Home Page" className="NavigationBarHomePage w-full max-w-[1440px] px-[80px] py-[30px] flex flex-row items-center gap-[140px] mx-auto">
          <img data-layer="Halle Logo" className="HalleLogo w-[112px] h-[42px]" src="https://www.figma.com/api/mcp/asset/94fb0417-4ef4-49a4-a878-234460f79d90" alt="Halle Logo" />
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
            <img data-layer="Home Hero Image Overlay" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src="https://www.figma.com/api/mcp/asset/6595aed0-1b41-4b75-b51f-782f8333fb32" alt="Hero" />
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
                      <img alt="" className="block max-w-none size-full" src="https://www.figma.com/api/mcp/asset/10231e5f-c4e5-4c82-99a9-1d83be78fb9f" />
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
                      <img alt="" className="block max-w-none size-full" src="https://www.figma.com/api/mcp/asset/10231e5f-c4e5-4c82-99a9-1d83be78fb9f" />
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
                      <img alt="" className="block max-w-none size-full" src="https://www.figma.com/api/mcp/asset/10231e5f-c4e5-4c82-99a9-1d83be78fb9f" />
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
                      <img alt="" className="block max-w-none size-full" src="https://www.figma.com/api/mcp/asset/10231e5f-c4e5-4c82-99a9-1d83be78fb9f" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1 ml-[1058px] mt-[12px] relative row-1 size-[50px]">
                <div className="absolute inset-0">
                  <img alt="" className="block max-w-none size-full" src="https://www.figma.com/api/mcp/asset/e93149c8-4ed9-4a85-96c4-d380eb482719" />
                </div>
              </div>
            </div>

            <div className="content-stretch flex gap-[40px] items-center justify-center relative shrink-0">
              <img alt="Prime Location" src="https://www.figma.com/api/mcp/asset/f521479d-187a-4c4a-84d8-29a5d8bcaa8b" className="h-[30px] object-contain" />
              <img alt="Zoopla" src="https://www.figma.com/api/mcp/asset/54576486-f67d-439f-9270-6983fdaff0bc" className="h-[25px] object-contain" />
              <img alt="On The Market" src="https://www.figma.com/api/mcp/asset/db4c1947-70d4-4bba-89be-6f75a68ed33d" className="h-[35px] object-contain" />
            </div>
          </div>
        </div>
      </div>

      {/* Featured Properties Section */}
      <div className="w-full bg-white flex flex-col items-center px-[80px] py-[50px]">
        <div className="w-full max-w-[1280px] flex flex-col justify-center items-center gap-12 text-center">
          <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-12 text-left">
            <div className="w-full lg:w-[580px] text-Brand-Colours-Black text-5xl font-semibold font-['Poppins'] leading-tight">Discover Your Perfect Dream Property Today</div>
            <div className="w-full lg:w-[496px] text-Brand-Colours-Black text-lg font-normal font-['Poppins']">Explore our hand picked selection of premium properties, featuring stunning designs, prime locations, and tailored details to match your lifestyle and needs. Find the perfect home or investment with ease.</div>
          </div>
          
          {/* Property Cards */}
          <div className="w-full flex flex-row justify-center items-start gap-5">
              {/* Property Card 1 */}
              <div className="relative w-[413px] h-[540px] group hover:scale-[1.03] transition-all duration-500 cursor-pointer">
                <img src="https://www.figma.com/api/mcp/asset/03a67313-69b2-4b86-9dc2-0f7c1d3cdd82" alt="Property" className="w-full h-full rounded-[20px] shadow-lg group-hover:shadow-2xl transition-all duration-500 object-cover" />
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
              <div className="relative w-[414px] h-[540px] group hover:scale-[1.03] transition-all duration-500 cursor-pointer">
                <img src="https://www.figma.com/api/mcp/asset/da4b1b35-fa16-49c2-88ea-57e9dd2b7a71" alt="Property" className="w-full h-full rounded-[20px] shadow-lg group-hover:shadow-2xl transition-all duration-500 object-cover" />
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
              <div className="relative w-[413px] h-[540px] group hover:scale-[1.03] transition-all duration-500 cursor-pointer">
                <img src="https://www.figma.com/api/mcp/asset/943bf4fc-90b3-4e44-896f-001428cf8c21" alt="Property" className="w-full h-full rounded-[20px] shadow-lg group-hover:shadow-2xl transition-all duration-500 object-cover" />
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
                    <div className="text-white text-base font-normal font-['Poppins']">3 Baths</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* View More Button */}
            <button className="w-[278px] mt-14 px-5 py-2.5 bg-Brand-Colours-Blue rounded-[53px] text-center text-neutral-50 text-xl font-semibold font-['Poppins'] hover:scale-110 hover:shadow-2xl hover:brightness-110 transition-all duration-300 cursor-pointer">
              View More Properties
            </button>
          </div>
        </div>
      </div>
      
      {/* About Us Section */}
      <div className="w-full bg-[#dadddc] flex flex-col items-center justify-center px-[80px] py-[60px]">
        <div className="w-full max-w-[1280px] flex flex-row items-center justify-center gap-[80px]">
        <img src="https://www.figma.com/api/mcp/asset/91cefe53-70f6-4d64-a2ba-5f61f8a85659" alt="About Us" className="w-[585px] h-[637px] rounded-[20px] shadow-lg object-cover" />
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
      </div>

      {/* Services Section */}
      <div className="w-full bg-[#2a363a] flex flex-col items-center justify-center px-[121px] py-[80px]">
        <div className="w-full max-w-[1198px] flex flex-col items-center justify-center gap-[90px]">
        <div className="text-white text-[60px] font-semibold text-center w-[908px]">Our Key Services</div>
        <div className="flex flex-row gap-[130px] items-center justify-center w-full">
          <div className="flex flex-col gap-[44px] items-center justify-center w-[202px]">
            <div className="h-[202px] w-[202px] relative">
              <img src="https://www.figma.com/api/mcp/asset/561e15c4-fdc7-4eaf-8b78-9df7a3127494" alt="Ellipse" className="absolute inset-0 w-full h-full" />
              <img src="https://www.figma.com/api/mcp/asset/62fb86ac-b47a-444b-a6fa-e74a1c5739dc" alt="House Search" className="absolute left-[45px] top-[48px] w-[112px] h-[105px]" />
            </div>
            <div className="text-white text-[30px] text-center w-[150px]">Book a Valuation</div>
          </div>
          <div className="flex flex-col gap-[44px] items-center justify-center w-[202px]">
            <div className="h-[202px] w-[202px] relative">
              <img src="https://www.figma.com/api/mcp/asset/561e15c4-fdc7-4eaf-8b78-9df7a3127494" alt="Ellipse" className="absolute inset-0 w-full h-full" />
              <img src="https://www.figma.com/api/mcp/asset/17502715-1a38-49f7-9fee-d2ad549ba267" alt="Renting Letting" className="absolute left-[45px] top-[48px] w-[112px] h-[105px]" />
            </div>
            <div className="text-white text-[30px] text-center w-[150px]">Renting & Letting</div>
          </div>
          <div className="flex flex-col gap-[44px] items-center justify-center w-[202px]">
            <div className="h-[202px] w-[202px] relative">
              <img src="https://www.figma.com/api/mcp/asset/561e15c4-fdc7-4eaf-8b78-9df7a3127494" alt="Ellipse" className="absolute inset-0 w-full h-full" />
              <img src="https://www.figma.com/api/mcp/asset/bec323ee-047c-4c74-8af4-3e948798b575" alt="Buying House" className="absolute left-[45px] top-[48px] w-[112px] h-[105px]" />
            </div>
            <div className="text-white text-[30px] text-center w-[150px]">Buying a Property</div>
          </div>
          <div className="flex flex-col gap-[44px] items-center justify-center w-[202px]">
            <div className="h-[202px] w-[202px] relative">
              <img src="https://www.figma.com/api/mcp/asset/561e15c4-fdc7-4eaf-8b78-9df7a3127494" alt="Ellipse" className="absolute inset-0 w-full h-full" />
              <img src="https://www.figma.com/api/mcp/asset/eab3ad4e-eaf0-4966-9d04-4ba2ca9bac32" alt="Sale Sign" className="absolute left-[45px] top-[48px] w-[112px] h-[105px]" />
            </div>
            <div className="text-white text-[30px] text-center w-[150px]">Selling a Property</div>
          </div>
        </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="w-full bg-white flex flex-col items-center py-[60px] px-[80px]">
        <div className="w-full max-w-[1280px] flex flex-col items-center gap-[50px]">
          <div className="w-[762px] flex flex-col gap-[11px] text-center">
            <div className="text-[#2a363a] text-[50px] font-semibold leading-tight">Here's What Our Satisfied Clients Have to Say About Us</div>
            <div className="text-[#1e1e1e] text-[18px]">Here's what our happy clients have to say about their experience with Halle. From finding their dream home to seamless transactions, your satisfaction is our priority.</div>
          </div>
        <div className="flex flex-row gap-[15px] items-center justify-center w-full">
          {[1,2,3].map((_,i) => (
            <div key={i} className="bg-white rounded-[20px] shadow-[0px_10px_30px_0px_rgba(0,0,0,0.25)] w-[413px] h-[210px] flex flex-col gap-[20px] p-[40px]">
              <div className="text-[#1e1e1e] text-[16px]">Great experience with Halle. Jatinder went out of his way to accommodate me and was genuinely friendly. Excellent service!</div>
              <div className="flex flex-row items-center justify-between w-full">
                <div className="flex flex-col gap-[4px]">
                  <div className="text-[#82c7be] text-[16px] font-semibold">Stephanie Wallis</div>
                  <div className="flex flex-row gap-[4px]">
                    {[...Array(5)].map((_,j) => (
                      <img key={j} src="https://www.figma.com/api/mcp/asset/45dc2d3d-62ca-4da5-9df7-2acaba388279" alt="star" className="w-[24px] h-[24px]" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full bg-[#dadddc] flex flex-col items-center px-[80px] py-[50px]">
        <div className="w-full max-w-[1280px] h-[370px] relative rounded-[20px] overflow-hidden">
          <img src="https://www.figma.com/api/mcp/asset/693fe106-2e75-4d6b-a747-201c297e820e" alt="CTA" className="absolute inset-0 w-full h-full object-cover rounded-[20px]" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#2a363a] rounded-[20px]"></div>
          <div className="absolute left-[51px] top-[82px] flex flex-col gap-[40px] w-[706px]">
            <div className="text-white">
              <h2 className="text-[40px] font-semibold font-['Poppins'] leading-tight mb-4">Find out what your property is worth in seconds</h2>
              <p className="text-[18px] font-normal font-['Poppins']">With house prices shooting up, how much is your home worth now?<br/>Get your house valued by us today in 60 seconds!</p>
            </div>
            <button className="bg-white flex items-center gap-2.5 h-[42px] px-5 py-2.5 rounded-[20px] w-fit hover:scale-110 transition-all duration-300">
              <span className="text-[#2a363a] text-[18px] font-medium font-['Poppins']">Instant Valuation</span>
              <img src="https://www.figma.com/api/mcp/asset/da2cc8d8-3b83-4d63-a200-7bfaacc0bc57" alt="Arrow" className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div className="w-full bg-[#2a363a] flex flex-col items-center px-[80px] py-[100px]">
        <div className="w-full max-w-[1280px] flex flex-col gap-[68px]">
          <div className="flex flex-col gap-[33px] items-center text-center">
            <p className="text-[#82c7be] text-[24px] font-semibold font-['Poppins']">Articles</p>
            <h2 className="text-white text-[50px] font-semibold font-['Poppins'] leading-[80px]">Explore New Insight</h2>
          </div>
          <div className="flex flex-row gap-[36px] items-start justify-between">
            {/* Large Blog Card */}
            <div className="bg-[#fefeff] rounded-[40px] shadow-lg w-[629px] h-[693px] p-[28px] flex flex-col gap-[37px]">
              <img src="https://www.figma.com/api/mcp/asset/5c7dcdf2-15d9-4d01-897b-14ee75a38755" alt="Blog" className="w-[572px] h-[314px] rounded-[40px] object-cover" />
              <div className="flex flex-col gap-[40px] w-[529px]">
                <h3 className="text-[#2a363a] text-[28px] font-semibold font-['Poppins']">10 Common Plumbing Problems and How to Fix Them Fast</h3>
                <p className="text-[#2a363a] text-[18px] font-normal font-['Poppins'] leading-[35px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eros elit, mattis eget finibus in, blandit tristique nisl. Sed finibus, justo non malesuada aliquam.</p>
                <button className="bg-[#82c7be] px-5 py-2.5 rounded-[53px] w-[208px] text-white text-[22px] font-semibold font-['Poppins'] hover:scale-110 transition-all duration-300">Read More</button>
              </div>
            </div>
            {/* Small Blog Cards */}
            <div className="flex flex-col gap-[31px]">
              <div className="bg-[#fefeff] rounded-[40px] shadow-lg w-[615px] h-[328px] p-[30px] flex flex-col gap-[40px]">
                <h3 className="text-[#2a363a] text-[28px] font-semibold font-['Poppins']">Why Regular Plumbing Maintenance Saves You More Money</h3>
                <p className="text-[#2a363a] text-[18px] font-normal font-['Poppins'] leading-[35px] w-[479px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eros elit, mattis eget finibus in</p>
                <button className="bg-[#82c7be] px-5 py-2.5 rounded-[53px] w-[208px] text-white text-[22px] font-semibold font-['Poppins'] hover:scale-110 transition-all duration-300">Read More</button>
              </div>
              <div className="bg-[#fefeff] rounded-[40px] shadow-lg w-[615px] h-[328px] p-[30px] flex flex-col gap-[40px]">
                <h3 className="text-[#2a363a] text-[28px] font-semibold font-['Poppins']">Why Regular Plumbing Maintenance Saves You More Money</h3>
                <p className="text-[#2a363a] text-[18px] font-normal font-['Poppins'] leading-[35px] w-[479px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eros elit, mattis eget finibus in</p>
                <button className="bg-[#82c7be] px-5 py-2.5 rounded-[53px] w-[208px] text-white text-[22px] font-semibold font-['Poppins'] hover:scale-110 transition-all duration-300">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="w-full bg-white flex flex-col items-center px-[98px] py-[60px]">
        <div className="w-full max-w-[1244px] flex flex-row gap-[15px]">
          <div className="w-[404px]">
            <h2 className="text-[#2a363a] text-[50px] font-semibold font-['Poppins'] leading-tight">Frequently Asked Questions</h2>
          </div>
          <div className="bg-white border border-[#dadddc] rounded-[12px] p-2 w-[825px] flex flex-col gap-2">
            {/* FAQ Item 1 - Open */}
            <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <p className="text-[#2a363a] text-[16px] font-semibold font-['Poppins']">Title can be added here</p>
                <div className="bg-[#82c7be] rounded-full p-1">
                  <img src="https://www.figma.com/api/mcp/asset/84704899-3991-4b44-85ba-7c9bb0b4b46b" alt="Arrow Up" className="w-6 h-6" />
                </div>
              </div>
              <p className="text-[#2a363a] text-[14px] font-normal font-['Poppins'] leading-[20px]">Use Jambo for analyzing and engaging with customer feedback, unlocking valuable insights, and revealing new releases. Lorem ipsum aliquam vel justo fringillas enigma.</p>
              <p className="text-[#2a363a] text-[14px] font-normal font-['Poppins'] leading-[20px]">Lorem ipsum aliquam vel justo fringillas enigma.</p>
            </div>
            <div className="h-px bg-[#dadddc]"></div>
            {/* FAQ Item 2 - Closed */}
            <div className="bg-white rounded-lg shadow-sm p-4 flex items-center justify-between">
              <p className="text-[#2a363a] text-[16px] font-medium font-['Poppins']">Title can be added here</p>
              <div className="bg-[#dadddc] rounded-full p-1">
                <img src="https://www.figma.com/api/mcp/asset/28ea72cb-87d4-4787-8f1f-fb0a0c67527c" alt="Arrow Down" className="w-6 h-6" />
              </div>
            </div>
            <div className="h-px bg-[#dadddc]"></div>
            {/* FAQ Item 3 - Closed */}
            <div className="bg-white rounded-lg shadow-sm p-4 flex items-center justify-between">
              <p className="text-[#2a363a] text-[16px] font-medium font-['Poppins']">Title can be added here</p>
              <div className="bg-[#dadddc] rounded-full p-1">
                <img src="https://www.figma.com/api/mcp/asset/28ea72cb-87d4-4787-8f1f-fb0a0c67527c" alt="Arrow Down" className="w-6 h-6" />
              </div>
            </div>
            <div className="h-px bg-[#dadddc]"></div>
            {/* FAQ Item 4 - Closed */}
            <div className="bg-white rounded-lg shadow-sm p-4 flex items-center justify-between">
              <p className="text-[#2a363a] text-[16px] font-medium font-['Poppins']">Title can be added here</p>
              <div className="bg-[#dadddc] rounded-full p-1">
                <img src="https://www.figma.com/api/mcp/asset/28ea72cb-87d4-4787-8f1f-fb0a0c67527c" alt="Arrow Down" className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="w-full bg-[#2a363a] flex flex-col items-center px-[79px] py-[40px]">
        <div className="w-full max-w-[1281px] flex flex-col gap-[50px]">
          <div className="flex flex-row gap-[145px]">
            <div className="flex flex-col gap-[40px] w-[352px]">
              <img src="https://www.figma.com/api/mcp/asset/89f2a15b-8a61-42e7-9928-8a11035db006" alt="Halle Logo" className="w-[85px] h-[31px]" />
              <p className="text-white text-[16px] font-normal font-['Poppins']">Halle is a trusted estate agency in Willenhall, dedicated to connecting people with homes that truly fit their needs and aspirations.</p>
              <div className="flex flex-row gap-5">
                <img src="https://www.figma.com/api/mcp/asset/3d106b60-ac0c-4154-87bc-a4c535043891" alt="Instagram" className="w-[38px] h-[38px] cursor-pointer hover:scale-110 transition-all duration-300" />
                <img src="https://www.figma.com/api/mcp/asset/d71fa971-8bff-4c3f-94d9-5ec15c3ff63a" alt="Facebook" className="w-[38px] h-[38px] cursor-pointer hover:scale-110 transition-all duration-300" />
                <img src="https://www.figma.com/api/mcp/asset/a0cfa42a-6375-4b0e-b9b4-fd8abdd8e516" alt="YouTube" className="w-[38px] h-[38px] cursor-pointer hover:scale-110 transition-all duration-300" />
                <img src="https://www.figma.com/api/mcp/asset/d278ac95-1966-4ebc-a80f-e9101626e4d2" alt="TikTok" className="w-[38px] h-[38px] cursor-pointer hover:scale-110 transition-all duration-300" />
              </div>
            </div>
            <div className="flex flex-row gap-[192px] text-white">
              <div className="flex flex-col gap-5 w-[137px]">
                <p className="text-[24px] font-bold font-['Poppins']">Quick Links:</p>
                <div className="flex flex-col gap-5 text-[16px] font-medium font-['Poppins']">
                  <p className="cursor-pointer hover:text-[#82c7be] transition-colors duration-300">Home</p>
                  <p className="cursor-pointer hover:text-[#82c7be] transition-colors duration-300">About Us</p>
                  <p className="cursor-pointer hover:text-[#82c7be] transition-colors duration-300">Properties</p>
                  <p className="cursor-pointer hover:text-[#82c7be] transition-colors duration-300">Contact Us</p>
                  <p className="cursor-pointer hover:text-[#82c7be] transition-colors duration-300">FAQ</p>
                </div>
              </div>
              <div className="flex flex-col gap-5 w-[133px]">
                <p className="text-[24px] font-bold font-['Poppins']">Resources</p>
                <div className="flex flex-col gap-5 text-[16px] font-medium font-['Poppins']">
                  <p className="cursor-pointer hover:text-[#82c7be] transition-colors duration-300">Buying</p>
                  <p className="cursor-pointer hover:text-[#82c7be] transition-colors duration-300">Letting</p>
                  <p className="cursor-pointer hover:text-[#82c7be] transition-colors duration-300">Landlords</p>
                  <p className="cursor-pointer hover:text-[#82c7be] transition-colors duration-300">Tenant Resources</p>
                  <p className="cursor-pointer hover:text-[#82c7be] transition-colors duration-300">Selling</p>
                </div>
              </div>
              <div className="flex flex-col gap-5 w-[130px]">
                <p className="text-[24px] font-bold font-['Poppins']">Legal</p>
                <div className="flex flex-col gap-5 text-[16px] font-medium font-['Poppins']">
                  <p className="cursor-pointer hover:text-[#82c7be] transition-colors duration-300">Terms of services</p>
                  <p className="cursor-pointer hover:text-[#82c7be] transition-colors duration-300">Privacy Policy</p>
                  <p className="cursor-pointer hover:text-[#82c7be] transition-colors duration-300">Cookies</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-[20px] border border-white/10 bg-white/5 p-5 text-white">
            <p className="text-[20px] font-bold font-['Poppins']">Company Information</p>
            <p className="text-[15px] leading-7 font-['Poppins']"><span className="font-semibold">Company Registration No:</span> 13459060</p>
            <p className="text-[15px] leading-7 font-['Poppins']"><span className="font-semibold">Registered Office:</span> 2-3 Walsall Road, Willenhall, WV13 2EH</p>
            <p className="text-[15px] leading-7 font-['Poppins']"><span className="font-semibold">Regulatory Memberships:</span> [Insert active redress scheme membership(s), e.g. The Property Ombudsman / Propertymark]</p>
            <p className="text-[12px] leading-6 text-[#dadddc] font-['Poppins']">Required for UK legal compliance and consumer disclosure for estate agency operations.</p>
          </div>
          <div className="flex flex-row items-center justify-between text-white text-[16px] font-semibold font-['Plus Jakarta Sans']">
            <p>Halle © All rights reserved Copyrights 2025</p>
            <p>Site By 5RV Digital</p>
          </div>
        </div>
      </footer>

      {/* ...existing code... */}
    </div>
  );
}

export default App;
