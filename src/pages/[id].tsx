/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Console } from "console";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/router";
import { useState } from "react";
import { string } from "zod";
import { api } from "~/utils/api";


import React from 'react';

function hasHttpOrHttps(url : string) {
  return url.includes("http://") || url.includes("https://");
}

const Page = () => {

  const router = useRouter();
  const { id }  = router.query ;
  const qid :any = id

  if (id === undefined) {
    return <div>Please Wait</div>;
  }
  const {data,isLoading} = api.example.getById.useQuery(qid)
  if(isLoading ){
    return <div>Loading</div>
  }

  const [link] :any = data 

  const address  = link?.address

  if(hasHttpOrHttps(address)){
    window.location.replace(address);
  }else{

    const add = "http://" + address?.toString()
    window.location.replace(add);


  }

  return (
    <div>
      <a href={address}>please wait</a>
    </div>
  );
};

export default Page;