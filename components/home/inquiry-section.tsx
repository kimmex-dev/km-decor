"use client";

import { services } from "@/lib/homepage-data";
import { ArrowRight, Phone, MapPin, MessageSquare, UploadCloud } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export function InquirySection() {
  return (
    <Suspense fallback={<InquiryForm inquiryType="service" />}>
      <InquirySectionWithParams />
    </Suspense>
  );
}

function InquirySectionWithParams() {
  const searchParams = useSearchParams();
  const serviceId = searchParams.get("service");
  const productId = searchParams.get("product");
  const imageSearch = searchParams.get("imageSearch");
  const service = services.find((item) => item.id === serviceId);
  const inquiryType = productId ? "product" : serviceId ? "service" : imageSearch ? "project" : "service";
  const contextLabel = service
    ? `${service.title} quote`
    : productId
      ? `Product request: ${productId}`
      : imageSearch
        ? "Photo search quote"
        : null;
  const defaultMessage = service
    ? `I need a quotation for ${service.title}. Location & schedule:`
    : productId
      ? `I need material supply details for product ${productId}. Quantity & delivery:`
      : imageSearch
        ? "I uploaded a photo. Please advise on ceiling or partition service:"
        : "";

  return <InquiryForm contextLabel={contextLabel} defaultMessage={defaultMessage} inquiryType={inquiryType} />;
}

function InquiryForm({
  contextLabel = null,
  defaultMessage = "",
  inquiryType
}: {
  contextLabel?: string | null;
  defaultMessage?: string;
  inquiryType: string;
}) {
  return (
    <section id="contact" className="bg-white py-20 border-b border-neutral-100">
      <div className="content-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] items-start">
        
        {/* Left Column: Clean Contact Pills & Headquarters */}
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-neutral-400 mb-2">
            DIRECT INQUIRY
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-black tracking-tight leading-tight">
            Start Your Fit-Out Project
          </h2>
          <p className="mt-4 text-xs md:text-sm text-neutral-500 leading-relaxed">
            Send your BOQ material list or ceiling elevation drawings for an official quotation.
          </p>

          {/* Clean Pill Contacts */}
          <div className="mt-8 flex flex-col gap-3">
            <a
              href="https://t.me/kmddecor"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-xl border border-neutral-200 bg-neutral-50 hover:bg-black hover:text-white transition duration-200 group text-xs"
            >
              <div className="flex items-center gap-3">
                <MessageSquare className="h-4 w-4 text-[#991b1b] group-hover:text-white" />
                <span className="font-semibold text-black group-hover:text-white">Telegram: @kmddecor</span>
              </div>
              <ArrowRight className="h-3.5 w-3.5 text-neutral-400 group-hover:text-white" />
            </a>

            <a
              href="tel:+85516927683"
              className="flex items-center justify-between p-4 rounded-xl border border-neutral-200 bg-neutral-50 hover:bg-black hover:text-white transition duration-200 group text-xs"
            >
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[#991b1b] group-hover:text-white" />
                <span className="font-semibold text-black group-hover:text-white">Call: (+855) 16 92 76 83 / 087 777 560</span>
              </div>
              <ArrowRight className="h-3.5 w-3.5 text-neutral-400 group-hover:text-white" />
            </a>

            <div className="flex items-start gap-3 p-4 rounded-xl border border-neutral-100 bg-white text-xs">
              <MapPin className="h-4 w-4 text-[#991b1b] shrink-0 mt-0.5" />
              <div>
                <strong className="block font-semibold text-black">Phnom Penh Headquarters</strong>
                <span className="text-neutral-500 text-[11px]">#54, St. 590, Boeung Kok II, Toul Kork, Phnom Penh, Cambodia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Pristine Single-Card BOQ Quotation Form */}
        <form className="border border-neutral-200 bg-white p-6 sm:p-8 rounded-2xl shadow-sm grid gap-5">
          {contextLabel ? (
            <div className="border-b border-neutral-100 pb-3">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400">Request Context</p>
              <p className="mt-0.5 text-xs font-semibold text-black">{contextLabel}</p>
            </div>
          ) : null}

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1.5" htmlFor="inquiry-name">
                Full Name *
              </label>
              <input
                id="inquiry-name"
                className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-3.5 py-2.5 text-xs text-black placeholder:text-neutral-400 focus:border-black focus:bg-white focus:outline-none transition"
                placeholder="Your name or company"
                type="text"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1.5" htmlFor="inquiry-contact">
                Phone / Telegram *
              </label>
              <input
                id="inquiry-contact"
                className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-3.5 py-2.5 text-xs text-black placeholder:text-neutral-400 focus:border-black focus:bg-white focus:outline-none transition"
                placeholder="+855 16 92 76 83"
                type="tel"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-neutral-700 mb-1.5" htmlFor="inquiry-type">
              Inquiry Category
            </label>
            <select
              id="inquiry-type"
              className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-3.5 py-2.5 text-xs text-black focus:border-black focus:bg-white focus:outline-none transition"
              defaultValue={inquiryType}
            >
              <option value="service">Supply & Install: Ceiling & Wall Partition Fit-Out</option>
              <option value="product">Building Material Supply (Gypsum / C-Line)</option>
              <option value="project">Landmark Project Consultation (MEF/MOJ)</option>
              <option value="package">Custom BOQ Package Quotation</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-neutral-700 mb-1.5" htmlFor="inquiry-message">
              Project Scope / BOQ Details
            </label>
            <textarea
              id="inquiry-message"
              className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-3.5 py-2.5 text-xs text-black placeholder:text-neutral-400 focus:border-black focus:bg-white focus:outline-none transition"
              defaultValue={defaultMessage}
              placeholder="Describe ceiling codes (CL-01 to CL-06), partition dimensions, or material quantities."
              rows={3}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-neutral-700 mb-1.5" htmlFor="inquiry-file">
              Attach BOQ / Floor Plan (Optional)
            </label>
            <div className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-neutral-50 p-3 text-xs text-neutral-500">
              <UploadCloud className="h-4 w-4 text-[#991b1b] shrink-0" />
              <input id="inquiry-file" accept="image/*,.pdf,.xls,.xlsx" className="block w-full text-xs cursor-pointer text-neutral-600" type="file" />
            </div>
          </div>

          <button
            className="bg-black text-white px-8 py-3.5 text-xs font-semibold uppercase tracking-widest hover:bg-[#991b1b] transition duration-200 w-full flex items-center justify-center gap-2 rounded-full mt-2 shadow-sm"
            type="submit"
          >
            Submit BOQ Request
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </form>

      </div>
    </section>
  );
}
