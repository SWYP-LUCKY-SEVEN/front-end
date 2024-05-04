"use client";

import getKakaoCode from "@/app/api/kakao";
import useAuth from "@/hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Kakao() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const { setAccessToken, setIsLogin } = useAuth();

  const { data } = useQuery({
    queryKey: ["KAKAO_CODE", code],
    queryFn: async () => getKakaoCode(code),
  });
  const router = useRouter();

  useEffect(() => {
    if (data) {
      setAccessToken(data.setAccessToken);
      setIsLogin(true);
      data?.joinDate ? router.push("/") : router.push("/setProfile");
    }
  }, [data]);
}
