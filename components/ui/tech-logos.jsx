import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const TechLogos = () => {
  return (
    <div className="flex items-center gap-6">
      {/* React */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.0001 18.8212C17.5582 18.8212 18.8213 17.5581 18.8213 16C18.8213 14.4419 17.5582 13.1788 16.0001 13.1788C14.442 13.1788 13.1789 14.4419 13.1789 16C13.1789 17.5581 14.442 18.8212 16.0001 18.8212Z"
                fill="#61DAFB"
              />
              <path
                d="M16 21.78C24.3606 21.78 31.1382 19.1922 31.1382 16C31.1382 12.8078 24.3606 10.22 16 10.22C7.63949 10.22 0.861923 12.8078 0.861923 16C0.861923 19.1922 7.63949 21.78 16 21.78Z"
                stroke="#61DAFB"
                strokeWidth="1.6"
              />
              <path
                d="M10.9944 18.89C15.1747 26.1305 20.8046 30.7061 23.5691 29.11C26.3336 27.5139 25.1859 20.3504 21.0057 13.11C16.8254 5.86955 11.1955 1.29391 8.43097 2.89001C5.66644 4.48612 6.81412 11.6496 10.9944 18.89Z"
                stroke="#61DAFB"
                strokeWidth="1.6"
              />
              <path
                d="M10.9944 13.11C6.81413 20.3504 5.66645 27.5139 8.43098 29.11C11.1955 30.7061 16.8254 26.1305 21.0057 18.89C25.1859 11.6496 26.3336 4.48611 23.5691 2.89001C20.8046 1.2939 15.1747 5.86955 10.9944 13.11Z"
                stroke="#61DAFB"
                strokeWidth="1.6"
              />
            </svg>
          </TooltipTrigger>
          <TooltipContent>
            <p>ReactJS</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {/* Javascript */}

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <svg
              width="33"
              height="32"
              viewBox="0 0 33 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M32.1381 0H0.138107V32H32.1381V0Z" fill="#F7DF1E" />
              <path
                d="M21.6339 25.0001C22.2785 26.0526 23.1171 26.8262 24.6003 26.8262C25.8463 26.8262 26.6422 26.2034 26.6422 25.343C26.6422 24.3119 25.8244 23.9467 24.453 23.3468L23.7012 23.0243C21.5313 22.0998 20.0898 20.9417 20.0898 18.4935C20.0898 16.2382 21.8082 14.5214 24.4936 14.5214C26.4055 14.5214 27.78 15.1868 28.7705 16.929L26.4289 18.4325C25.9133 17.5081 25.3571 17.1439 24.4936 17.1439C23.6129 17.1439 23.0546 17.7026 23.0546 18.4325C23.0546 19.3346 23.6134 19.6998 24.9035 20.2586L25.6553 20.5806C28.2102 21.6762 29.6527 22.7932 29.6527 25.3044C29.6527 28.0117 27.526 29.4949 24.6699 29.4949C21.8772 29.4949 20.0731 28.1641 19.1903 26.4198L21.6339 25.0001ZM11.0115 25.2607C11.4838 26.0988 11.9136 26.8074 12.9467 26.8074C13.9346 26.8074 14.5579 26.4208 14.5579 24.9179V14.6931H17.5649V24.9585C17.5649 28.0721 15.7393 29.4893 13.0747 29.4893C10.6671 29.4893 9.2728 28.2433 8.56372 26.7426L11.0115 25.2607Z"
                fill="black"
              />
            </svg>
          </TooltipTrigger>
          <TooltipContent>
            <p>Javascript</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {/* Tailwind */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <svg
              width="33"
              height="32"
              viewBox="0 0 33 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.1382 6.4C11.8714 6.4 9.20478 8.53279 8.13798 12.798C9.73818 10.6652 11.6049 9.86569 13.7381 10.3987C14.9553 10.7028 15.8253 11.5859 16.7884 12.5631C18.357 14.1549 20.1725 15.9972 24.1384 15.9972C28.4048 15.9972 31.0718 13.8644 32.1382 9.59879C30.5384 11.7316 28.6717 12.5315 26.5381 11.9985C25.3212 11.6944 24.4513 10.8112 23.4881 9.83408C21.9196 8.24229 20.1037 6.4 16.1382 6.4V6.4ZM8.13798 15.9972C3.87158 15.9972 1.20458 18.13 0.138184 22.3956C1.73798 20.2628 3.60468 19.4629 5.73828 19.9963C6.95514 20.3008 7.82507 21.1835 8.78823 22.1603C10.3568 23.7521 12.1727 25.5948 16.1382 25.5948C20.405 25.5948 23.0716 23.462 24.1384 19.1964C22.5382 21.3292 20.6715 22.1291 18.5383 21.5957C17.321 21.292 16.4511 20.4084 15.4879 19.4317C13.9194 17.8399 12.1039 15.9972 8.13798 15.9972V15.9972Z"
                fill="#06B6D4"
              />
            </svg>
          </TooltipTrigger>
          <TooltipContent>
            <p>Tailwindcss</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {/* shadcn */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <svg
              width="33"
              height="32"
              viewBox="0 0 33 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_309_704)">
                <path
                  d="M26.1381 16L16.1381 26"
                  className="stroke-primary"
                  //   stroke="black"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24.1381 5L5.13811 24"
                  className="stroke-primary"
                  //   stroke="black"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_309_704">
                  <rect
                    width="32"
                    height="32"
                    fill="white"
                    transform="translate(0.138107)"
                  />
                </clipPath>
              </defs>
            </svg>
          </TooltipTrigger>
          <TooltipContent>
            <p>Shadcn/ui</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default TechLogos;
