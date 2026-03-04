import {
  ArrowRight,
  PencilRuler,
  LineChart,
  Megaphone,
  WalletCards,
  Monitor,
  Code,
  Briefcase,
  Users
} from 'lucide-react';

export default function ExploreCategories() {
  // Data array for easy rendering and maintenance
  const categories = [
    {
      name: 'Design', count: '235', icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_12218_1009)">
          <path d="M6 42.0001H14L40 16.0001C41.0609 14.9393 41.6569 13.5004 41.6569 12.0001C41.6569 10.4998 41.0609 9.06098 40 8.00012C38.9391 6.93925 37.5003 6.34326 36 6.34326C34.4997 6.34326 33.0609 6.93925 32 8.00012L6 34.0001V42.0001Z" stroke="#4640DE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M29 11L37 19" stroke="#4640DE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M24 16L14 6L6 14L16 24" stroke="#4640DE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M14 16L11 19" stroke="#4640DE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M32 24L42 34L34 42L24 32" stroke="#4640DE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M32 34L29 37" stroke="#4640DE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_12218_1009">
            <rect width="48" height="48" fill="white" />
          </clipPath>
        </defs>
      </svg>

    },
    {
      name: 'Sales', count: '756', icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 22C18.4183 22 22 18.4183 22 14C22 9.58172 18.4183 6 14 6C9.58172 6 6 9.58172 6 14C6 18.4183 9.58172 22 14 22Z" stroke="#4640DE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M14 6V14H22" stroke="#4640DE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M18 34V42" stroke="#4640DE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M34 28V42" stroke="#4640DE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M26 26V42" stroke="#4640DE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M42 24V42" stroke="#4640DE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
      </svg>

    },
    {
      name: 'Marketing', count: '140', icon: <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.8325 6.30333V28.5667C14.832 29.2574 14.5877 29.9259 14.1427 30.4542C13.6977 30.9826 13.0805 31.3369 12.3999 31.4549C11.7192 31.5728 11.0188 31.4467 10.422 31.0989C9.82521 30.751 9.37031 30.2037 9.13747 29.5533L5.55913 19.3033M26.4991 18.1667C27.8252 18.1667 29.097 17.6399 30.0347 16.7022C30.9724 15.7645 31.4991 14.4927 31.4991 13.1667C31.4991 11.8406 30.9724 10.5688 30.0347 9.63113C29.097 8.69345 27.8252 8.16667 26.4991 8.16667V18.1667ZM5.55913 19.305C4.1445 18.7035 2.98111 17.6318 2.26585 16.2711C1.55059 14.9105 1.32739 13.3445 1.63402 11.8382C1.94066 10.3319 2.75829 8.97775 3.94855 8.005C5.13881 7.03224 6.6286 6.50059 8.1658 6.5H11.2191C18.0525 6.5 23.9275 4.44333 26.4991 1.5V24.8333C23.9275 21.89 18.0541 19.8333 11.2191 19.8333H8.1658C7.27019 19.8346 6.38355 19.6549 5.55913 19.305Z" stroke="#4640DE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
      </svg>

    },
    {
      name: 'Finance', count: '325', icon: <svg width="39" height="31" viewBox="0 0 39 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M29.5 9.5V5.5C29.5 4.43913 29.0786 3.42172 28.3284 2.67157C27.5783 1.92143 26.5609 1.5 25.5 1.5H5.5C4.43913 1.5 3.42172 1.92143 2.67157 2.67157C1.92143 3.42172 1.5 4.43913 1.5 5.5V17.5C1.5 18.5609 1.92143 19.5783 2.67157 20.3284C3.42172 21.0786 4.43913 21.5 5.5 21.5H9.5M13.5 29.5H33.5C34.5609 29.5 35.5783 29.0786 36.3284 28.3284C37.0786 27.5783 37.5 26.5609 37.5 25.5V13.5C37.5 12.4391 37.0786 11.4217 36.3284 10.6716C35.5783 9.92143 34.5609 9.5 33.5 9.5H13.5C12.4391 9.5 11.4217 9.92143 10.6716 10.6716C9.92143 11.4217 9.5 12.4391 9.5 13.5V25.5C9.5 26.5609 9.92143 27.5783 10.6716 28.3284C11.4217 29.0786 12.4391 29.5 13.5 29.5ZM27.5 19.5C27.5 20.5609 27.0786 21.5783 26.3284 22.3284C25.5783 23.0786 24.5609 23.5 23.5 23.5C22.4391 23.5 21.4217 23.0786 20.6716 22.3284C19.9214 21.5783 19.5 20.5609 19.5 19.5C19.5 18.4391 19.9214 17.4217 20.6716 16.6716C21.4217 15.9214 22.4391 15.5 23.5 15.5C24.5609 15.5 25.5783 15.9214 26.3284 16.6716C27.0786 17.4217 27.5 18.4391 27.5 19.5Z" stroke="#4640DE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
      </svg>

    },
    {
      name: 'Technology', count: '436', icon: <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 29.5L13.5 35.5L11.5 37.5H27.5L25.5 35.5L24 29.5H15ZM1.5 21.5H37.5H1.5ZM5.5 29.5H33.5C34.5609 29.5 35.5783 29.0786 36.3284 28.3284C37.0786 27.5783 37.5 26.5609 37.5 25.5V5.5C37.5 4.43913 37.0786 3.42172 36.3284 2.67157C35.5783 1.92143 34.5609 1.5 33.5 1.5H5.5C4.43913 1.5 3.42172 1.92143 2.67157 2.67157C1.92143 3.42172 1.5 4.43913 1.5 5.5V25.5C1.5 26.5609 1.92143 27.5783 2.67157 28.3284C3.42172 29.0786 4.43913 29.5 5.5 29.5Z" stroke="#4640DE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
      </svg>

    },
    {
      name: 'Engineering', count: '542', icon: <svg width="43" height="35" viewBox="0 0 43 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.5 33.5005L25.5 1.50049M33.5 9.50049L41.5 17.5005L33.5 25.5005M9.5 25.5005L1.5 17.5005L9.5 9.50049" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
      </svg>

    },
    {
      name: 'Business', count: '211', icon: <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg"
        className="transition-colors duration-300"
      >
        <path d="M37.5005 24.01C31.7815 26.3225 25.6693 27.5075 19.5005 27.5C13.1345 27.5 7.06049 26.26 1.50049 24.01M19.5005 21.5H19.5205M27.5005 9.5V5.5C27.5005 4.43913 27.0791 3.42172 26.3289 2.67157C25.5788 1.92143 24.5614 1.5 23.5005 1.5H15.5005C14.4396 1.5 13.4222 1.92143 12.6721 2.67157C11.9219 3.42172 11.5005 4.43913 11.5005 5.5V9.5H27.5005ZM5.50049 37.5H33.5005C34.5614 37.5 35.5788 37.0786 36.3289 36.3284C37.0791 35.5783 37.5005 34.5609 37.5005 33.5V13.5C37.5005 12.4391 37.0791 11.4217 36.3289 10.6716C35.5788 9.92143 34.5614 9.5 33.5005 9.5H5.50049C4.43962 9.5 3.42221 9.92143 2.67206 10.6716C1.92192 11.4217 1.50049 12.4391 1.50049 13.5V33.5C1.50049 34.5609 1.92192 35.5783 2.67206 36.3284C3.42221 37.0786 4.43962 37.5 5.50049 37.5Z" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
      </svg>

    },
    {
      name: 'Human Resource', count: '346', icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"
        className="transition-colors duration-300"
      >
        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.0001 8.33333C19.116 8.33333 18.2682 8.68452 17.6431 9.30964C17.0179 9.93477 16.6667 10.7826 16.6667 11.6667C16.6667 12.5507 17.0179 13.3986 17.6431 14.0237C18.2682 14.6488 19.116 15 20.0001 15C20.8841 15 21.732 14.6488 22.3571 14.0237C22.9822 13.3986 23.3334 12.5507 23.3334 11.6667C23.3334 10.7826 22.9822 9.93477 22.3571 9.30964C21.732 8.68452 20.8841 8.33333 20.0001 8.33333ZM15.286 6.95262C16.5363 5.70238 18.232 5 20.0001 5C21.7682 5 23.4639 5.70238 24.7141 6.95262C25.9644 8.20286 26.6667 9.89856 26.6667 11.6667C26.6667 13.4348 25.9644 15.1305 24.7141 16.3807C23.4639 17.631 21.7682 18.3333 20.0001 18.3333C18.232 18.3333 16.5363 17.631 15.286 16.3807C14.0358 15.1305 13.3334 13.4348 13.3334 11.6667C13.3334 9.89856 14.0358 8.20286 15.286 6.95262ZM8.33342 15C7.89139 15 7.46746 15.1756 7.1549 15.4882C6.84234 15.8007 6.66675 16.2246 6.66675 16.6667C6.66675 17.1087 6.84234 17.5326 7.1549 17.8452C7.46746 18.1577 7.89139 18.3333 8.33342 18.3333C8.77544 18.3333 9.19936 18.1577 9.51193 17.8452C9.82449 17.5326 10.0001 17.1087 10.0001 16.6667C10.0001 16.2246 9.82449 15.8007 9.51193 15.4882C9.19936 15.1756 8.77544 15 8.33342 15ZM4.79788 13.1311C5.73556 12.1935 7.00733 11.6667 8.33342 11.6667C9.6595 11.6667 10.9313 12.1935 11.8689 13.1311C12.8066 14.0688 13.3334 15.3406 13.3334 16.6667C13.3334 17.9928 12.8066 19.2645 11.8689 20.2022C10.9313 21.1399 9.6595 21.6667 8.33342 21.6667C7.00733 21.6667 5.73556 21.1399 4.79788 20.2022C3.8602 19.2645 3.33341 17.9928 3.33341 16.6667C3.33341 15.3406 3.8602 14.0688 4.79788 13.1311ZM31.6667 15C31.2247 15 30.8008 15.1756 30.4882 15.4882C30.1757 15.8007 30.0001 16.2246 30.0001 16.6667C30.0001 17.1087 30.1757 17.5326 30.4882 17.8452C30.8008 18.1577 31.2247 18.3333 31.6667 18.3333C32.1088 18.3333 32.5327 18.1577 32.8453 17.8452C33.1578 17.5326 33.3334 17.1087 33.3334 16.6667C33.3334 16.2246 33.1578 15.8007 32.8453 15.4882C32.5327 15.1756 32.1088 15 31.6667 15ZM28.1312 13.1311C29.0689 12.1935 30.3407 11.6667 31.6667 11.6667C32.9928 11.6667 34.2646 12.1935 35.2023 13.1311C36.14 14.0688 36.6667 15.3406 36.6667 16.6667C36.6667 17.9928 36.14 19.2645 35.2023 20.2022C34.2646 21.1399 32.9928 21.6667 31.6667 21.6667C30.3407 21.6667 29.0689 21.1399 28.1312 20.2022C27.1935 19.2645 26.6667 17.9928 26.6667 16.6667C26.6667 15.3406 27.1935 14.0688 28.1312 13.1311ZM20.0001 23.3322C18.6672 23.3322 17.3648 23.7315 16.261 24.4787C15.2205 25.1831 14.4015 26.1661 13.8962 27.3131L13.4943 31.6667H26.5058L26.104 27.3131C25.5987 26.1661 24.7796 25.1831 23.7391 24.4787C22.6353 23.7315 21.333 23.3322 20.0001 23.3322ZM30.0001 31.6667H35.0001V30.0001C35.0001 30.0001 35.0001 30.0002 35.0001 30.0001C35 29.3074 34.7841 28.6318 34.3825 28.0675C33.9808 27.5031 33.4132 27.0779 32.7587 26.851C32.1042 26.624 31.3952 26.6067 30.7304 26.8013C30.3358 26.9168 29.9683 27.1035 29.6452 27.35C29.877 28.1958 30.0001 29.085 30.0001 30V31.6667ZM28.2164 24.2961C27.5167 23.2887 26.634 22.4131 25.6077 21.7184C23.9523 20.5978 21.9991 19.9988 20.0001 19.9988C18.0011 19.9988 16.0479 20.5978 14.3925 21.7184C13.3661 22.4131 12.4834 23.2887 11.7838 24.2961C11.293 23.9992 10.7631 23.7652 10.2062 23.6021C8.87647 23.2129 7.45856 23.2477 6.14953 23.7016C4.84049 24.1554 3.70539 25.0058 2.902 26.1346C2.09861 27.2634 1.66685 28.6144 1.66675 29.9999V33.3333C1.66675 34.2538 2.41294 35 3.33341 35H36.6667C37.5872 35 38.3334 34.2538 38.3334 33.3333V30C38.3333 28.6145 37.9016 27.2634 37.0982 26.1346C36.2948 25.0058 35.1597 24.1554 33.8506 23.7016C32.5416 23.2477 31.1237 23.2129 29.794 23.6021C29.237 23.7652 28.7072 23.9992 28.2164 24.2961ZM10.355 27.35C10.0318 27.1035 9.6644 26.9168 9.26979 26.8013C8.60495 26.6067 7.89599 26.624 7.24147 26.851C6.58696 27.0779 6.0194 27.5031 5.61771 28.0675C5.21603 28.6318 5.00016 29.3073 5.00008 30C5.00008 30 5.00008 30 5.00008 30V31.6667H10.0001V30C10.0001 29.085 10.1231 28.1958 10.355 27.35Z" fill="currentColor" />
      </svg>

    },
  ];

  return (
    // Outer section wrapper
    <section className="w-full flex justify-center items-center pb-16 pt-6 lg:pb-24 bg-white">

      {/* Main Container constrained to 1192px */}
      <div className="max-w-[1192px] w-full lg:px-0 md:px-8 flex flex-col">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">

          {/* Main Title matching your exact typography parameters */}
          {/* Note: add 'font-clash' to your tailwind config mapping to 'Clash Display' */}
          <h2 className="text-[40px] md:text-[48px] font-[600] leading-[1.1] tracking-tight">
            <span className="text-[#25324B]">Explore by </span>
            <span className="text-[#26A4FF]">category</span>
          </h2>

          {/* Show all jobs link */}
          <a
            href="#"
            className="flex items-center gap-2 text-[#4640DE] text-[16px] font-semibold hover:text-[#3b36be] transition-colors pb-1 md:pb-2"
          >
            Show all jobs <ArrowRight size={20} strokeWidth={2} />
          </a>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {categories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              // Card Container with 'group' class to trigger child hover effects
              <div
                key={index}
                className="group border border-[#D6DDEB] p-8 min-h-[250px] flex flex-col bg-white hover:bg-[#4640DE] transition-all duration-300 cursor-pointer"
              >
                {/* Icon: Blue by default, white on hover */}
                <div className="text-[#4640DE] group-hover:text-white transition-colors duration-300">
                  {Icon}
                </div>

                {/* Text Content pushed to the bottom using mt-auto */}
                <div className="mt-auto flex flex-col gap-3 pt-8">

                  {/* Category Name: Dark by default, white on hover */}
                  <h3 className="text-[#25324B] group-hover:text-white text-[24px] font-bold transition-colors duration-300">
                    {cat.name}
                  </h3>

                  {/* Footer Row: Subtitle + Arrow */}
                  <div className="flex justify-between items-center">

                    {/* Subtitle: Gray by default, dim white on hover */}
                    <span className="text-[#7C8493] group-hover:text-white/90 text-[16px] transition-colors duration-300">
                      {cat.count} jobs available
                    </span>

                    {/* Arrow: Dark by default, white on hover */}
                    <ArrowRight
                      className="text-[#25324B] group-hover:text-white transition-colors duration-300"
                      size={24}
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}