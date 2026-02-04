"use client";

import Image from "next/image";

export function Footer() {
  return (
    <div className="w-full border-t border-white/10 py-11">
      <div className="container mx-auto px-4">
        
        {/* grid wrapper */}
        <div className="grid grid-cols-6 gap-6 text-sm pb-15">
          
          {/* logo column */}
          <div>
            <Image src="/logo.svg" width={20} height={20} alt="Linear logo" />
          </div>

          {/* footer sections */}
          <div>
            <h3 className="text-white font-medium mb-10">Feautures</h3>
            <ul className="font-normal text-[#8a8f98] space-y-2">
              <li className="cursor-pointer transition hover:text-white">Plan</li>
              <li className="cursor-pointer transition hover:text-white">Build</li>
              <li className="cursor-pointer transition hover:text-white">Insights</li>
              <li className="cursor-pointer transition hover:text-white">Customer Requests</li>
              <li className="cursor-pointer transition hover:text-white">Linear Asks</li>
              <li className="cursor-pointer transition hover:text-white">Security</li>
              <li className="cursor-pointer transition hover:text-white">Mobile</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-10">Product</h3>
            <ul className="font-normal text-[#8a8f98] space-y-2">
              <li className="cursor-pointer transition hover:text-white">Pricing</li>
              <li className="cursor-pointer transition hover:text-white">Method</li>
              <li className="cursor-pointer transition hover:text-white">Integrations</li>
              <li className="cursor-pointer transition hover:text-white">Changelog</li>
              <li className="cursor-pointer transition hover:text-white">Documentation</li>
              <li className="cursor-pointer transition hover:text-white">Download</li>
              <li className="cursor-pointer transition hover:text-white">Switch</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-10">Company</h3>
            <ul className="font-normal text-[#8a8f98] space-y-2">
              <li className="cursor-pointer transition hover:text-white">About</li>
              <li className="cursor-pointer transition hover:text-white">Customers</li>
              <li className="cursor-pointer transition hover:text-white">Careers</li>
              <li className="cursor-pointer transition hover:text-white">Now</li>
              <li className="cursor-pointer transition hover:text-white">README</li>
              <li className="cursor-pointer transition hover:text-white">Quality</li>
              <li className="cursor-pointer transition hover:text-white">Brand</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-10">Resources</h3>
            <ul className="font-normal text-[#8a8f98] space-y-2">
              <li className="cursor-pointer transition hover:text-white">Developers</li>
              <li className="cursor-pointer transition hover:text-white">Status</li>
              <li className="cursor-pointer transition hover:text-white">Startups</li>
              <li className="cursor-pointer transition hover:text-white">Report vulnerability</li>
              <li className="cursor-pointer transition hover:text-white">DPA</li>
              <li className="cursor-pointer transition hover:text-white">Privacy</li>
              <li className="cursor-pointer transition hover:text-white">Terms</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-10">Connect</h3>
            <ul className="font-normal text-[#8a8f98] space-y-2">
              <li className="cursor-pointer transition hover:text-white">Contact us</li>
              <li className="cursor-pointer transition hover:text-white">Community</li>
              <li className="cursor-pointer transition hover:text-white">X (Twitter)</li>
              <li className="cursor-pointer transition hover:text-white">GitHub</li>
              <li className="cursor-pointer transition hover:text-white">YouTube</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
