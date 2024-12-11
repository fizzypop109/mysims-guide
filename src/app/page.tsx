import {MenuLink} from "@/app/_components/MenuLink/MenuLink";

export default function Home() {
  return (
    <div className="gradient h-[100svh] flex flex-col gap-[20px] p-[20px]">
        <img src="logo.webp" className="w-full sm:w-[500px] mx-auto" />

        <div className="flex flex-col gap-[10px] sm:w-[50%] sm:mx-auto">
            <MenuLink to="/essences" label="Essences" />
            <MenuLink to="/sims" label="Sims" />
        </div>
    </div>
  );
}
