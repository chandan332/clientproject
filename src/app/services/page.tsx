import DashDashText from "@/components/DashDashText";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import Image from "next/image";
import RedButton from "@/components/buttons/RedButton";
import Link from "next/link";

const page = () => {
  return (
    <div className="">
      <section className="flex flex-col items-center" id="services">
        <div className="my-6">
          <DashDashText title="SERVICES" text="What Solution We Provide" />
        </div>
        <div className="w-3/4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="drop-shadow-2xl">
            <CardHeader className="flex flex-col items-center">
              <Image
                src="/Fssai.jpg"
                alt="No Image"
                width="100"
                height="100"
                className="rounded-full shadow-lg"
              />
              <CardTitle>File & Drafting</CardTitle>
              <CardDescription className="text-center tracking-tighter">
                File: Store records. Drafting: Create preliminary documents or
                plans.
              </CardDescription>
              <Link href={"services/drafting/pricing"}>
                <RedButton text="Know More" />
              </Link>
            </CardHeader>
          </Card>
          <Card className="drop-shadow-2xl">
            <CardHeader className="flex flex-col items-center">
              <Image
                src="/copywriting.jpg"
                alt="No Image"
                width="100"
                height="100"
                className="rounded-full shadow-lg"
              />
              <CardTitle>Copy Writing</CardTitle>
              <CardDescription className="text-center tracking-tighter">
                Copywriting: Art of creating compelling text to engage and
                persuade.
              </CardDescription>
              <Link href={"services/copywriting/pricing"}>
                <RedButton text="Know More" />
              </Link>
            </CardHeader>
          </Card>
          <Card className="drop-shadow-2xl">
            <CardHeader className="flex flex-col items-center">
              <Image
                src="/Fssai.jpg"
                alt="No Image"
                width="100"
                height="100"
                className="rounded-full shadow-lg"
              />
              <CardTitle>Renewal</CardTitle>
              <CardDescription className="text-center tracking-tighter">
                FSSAI Renewal: Periodic process to maintain food safety
                compliance in India.
              </CardDescription>
              <Link href={"services/renewal/pricing"}>
                <RedButton text="Know More" />
              </Link>
            </CardHeader>
          </Card>
        </div>
      </section>
      <section className="flex flex-col items-center" id="upcomingservices">
        <div className="my-6">
          <h1 className="text-2xl font-bold">Upcoming Solutions</h1>
        </div>
        <div className="w-3/4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="drop-shadow-2xl">
            <CardHeader className="flex flex-col items-center">
              <Image
                src="/digital.jpg"
                alt="No Image"
                width="100"
                height="100"
                className="rounded-full shadow-lg opacity-50"
              />
              <CardDescription className="text-center">
                coming soon...
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="drop-shadow-2xl">
            <CardHeader className="flex flex-col items-center">
              <Image
                src="/graphics.jpg"
                alt="No Image"
                width="100"
                height="100"
                className="rounded-full shadow-lg opacity-50"
              />
              <CardDescription className="text-center">
                coming soon...
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="drop-shadow-2xl">
            <CardHeader className="flex flex-col items-center">
              <Image
                src="/website.jpg"
                alt="No Image"
                width="100"
                height="100"
                className="rounded-full shadow-lg opacity-50"
              />
              <CardDescription className="text-center">
                coming soon...
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default page;
