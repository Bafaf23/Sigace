"use client";
import Link from "next/link";

export default function ItemProfile({ user }) {
  const name = user.user.name || user.name;
  const lastName = user.user.lastName || user.lastName;
  const inicial = name.charAt(0) + lastName.charAt(0);
  return (
    <Link href="/dashboard/profile" className="w-full block p-2">
      <div className="flex items-center gap-3 p-2 rounded-lg transition-all cursor-pointer w-full ">
        <div className="w-10 h-10 rounded-full bg-cyan-500/70 flex items-center justify-center">
          <span className="text-sm font-bold text-white ">{inicial}</span>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-sm font-bold text-slate-500">
            {name} {lastName}
          </h1>
          <span className="text-xs text-slate-500 truncate max-w-[150px]">
            {user.user.email || user.email}
          </span>
        </div>
      </div>
    </Link>
  );
}
