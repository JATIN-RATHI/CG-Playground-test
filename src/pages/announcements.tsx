import Image from "next/image";
import Link from "next/link";
export default function Announcements() {
    return (<div className=' grid bg-dark-layer-2 min-h-screen text-yellow-400 text-center '> 
        <div className="text-4xl p-3 animate-pulse">📢Announcements and News</div>
        

        <div className="flex justify-between flex-wrap max-w-screen-xl m-auto">
            <div className="m-3 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div>
                    <Image className="m-auto" src="/salesforceIcon.png" alt="Icon Sf" width={100} height={100}/>
                </div>
                {/* <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Salesforce</h5>
                </a> */}
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">✨ Free Certification Exams You can now take the AI Associate and AI Specialist certification exams for free, starting September 23, 2024, through December 31, 2025. Don't miss this chance to get certified!</p>
                <a href="https://www.linkedin.com/pulse/good-news-from-salesforce-free-ai-training-certifications-astreca-lq5zf/?trackingId=kNo1DcMhTQyimDUcIN93Ag%3D%3D" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" target="blank">
                    Read more &nbsp;
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>

            <div className="m-3 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div>
                    <Image className="m-auto" src="/azureLogo.png" alt="AZURE" width={100} height={100}/>
                </div>
                {/* <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Azure</h5>
                </a> */}
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">These best practices are intended to be a resource for IT pros. IT pros include designers, architects, developers, and testers who build and deploy secure Azure solutions.</p>
                <a href="https://learn.microsoft.com/en-us/azure/security/fundamentals/best-practices-and-patterns" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" target="blank">
                    Read more &nbsp;
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
            <div className="m-3 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div>
                    <Image className="m-auto" src="/dotnet.png" alt="Dot Net" width={100} height={100}/>
                </div>
                {/* <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">.NET</h5>
                </a> */}
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">9x Factor of .NET Security for New Developers: Training to Production</p>
                <a href="https://www.linkedin.com/pulse/9x-factor-net-security-new-developers-training-vinod-singh-rautela-pg19c/?trackingId=UZrhwXHmRoGRgWRAmI52wA%3D%3D" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" target="blank">
                    Read more &nbsp;
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
            <div className="m-3 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div>
                    <Image className="m-auto" src="/snowflakeLogo.png" alt="Snowflake" width={150} height={150}/>
                </div>
                {/* <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Snowflake</h5>
                </a> */}
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Solving Data Sharing Challenges for Non-Snowflake Users: Leveraging Snowflake Reader Accounts using Direct Share</p>
                <a href="https://learn.microsoft.com/en-us/azure/security/fundamentals/best-practices-and-patterns" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" target="blank">
                    Read more &nbsp;
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
            <div>
                <Link href="/">
                    <img src="/homeBtn.webp" alt="Home" className="max-w-[5%] fixed right-20 bottom-10"/>
                </Link>
            </div>  
        </div>

    </ div>)
}