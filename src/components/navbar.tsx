import Link from "next/link";

export default function Navbar(): JSX.Element {
  return (
    <>
      <nav className="navbar grow-0 py-0 px-4 md:px-12 lg:px-32 xl:px-60 bg-transparent">
        <div className="navbar-start flex justify-between">
          <Link href="/" prefetch={false}>
            {/* Banner image will preload due to priority=true, doing this since its above the fold/shouldn't be lazy loaded */}
            {/* <Image
              src="/next.svg"
              alt="Hot Metal Gaming Logo"
              className="h-[75px] w-[75px] md:h-[100px] md:w-[100px]"
              height={100}
              width={100}
              priority={true}
            /> */}
            Aaron Cooper
          </Link>
          <Link href="/resume" prefetch={false}>
            Resume
          </Link>
        </div>
      </nav>
    </>
  );
}
