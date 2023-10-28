import styled from "styled-components";
import * as React from "react";

export default function MyComponent(props) {
  return (
    <div className="justify-end items-center bg-white flex flex-col px-5">
      <div className="self-center w-full max-w-[1738px] my-10 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="sm:flex sm:flex-col hidden items-stretch w-[36%] max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/237df75f-bdd8-420d-b69c-b0e20ea1d2e5?apiKey=e74082b80b2042a383841c0a6d125528&"
              className="aspect-[0.86] p-16 object-cover object-center w-[543px] overflow-hidden max-w-full my-auto max-md:mt-10"
            />
          </div>
          <div className="flex flex-col items-stretch w-[64%] ml-5 max-md:w-full max-md:ml-0">
            <div className="shadow-[0px_10px_40px_0px_rgba(0,0,0,0.16)] bg-white flex grow flex-col w-full mx-auto px-5 py-10 rounded-xl max-md:max-w-full max-md:mt-10">
              <div className="text-slate-900 text-center text-5xl font-bold leading-[52.8px] self-center whitespace-nowrap max-md:text-4xl">
                Login
              </div>
              <div className="self-center flex mb-0 w-[824px] max-w-full flex-col mt-10 max-md:mb-2.5">
                <div className="text-slate-900 text-lg font-medium leading-5 self-start whitespace-nowrap">
                  Login ID
                </div>
                <input
                  placeholder=" Enter Login ID"
                  className="text-gray-500 text-lg leading-5 self-stretch border mt-3.5 pl-4 pr-5 py-5 rounded-lg border-solid border-slate-900 border-opacity-40 whitespace-nowrap max-md:max-w-full"
                />

                <div className="text-slate-900 text-lg font-medium leading-5 mt-8 self-start whitespace-nowrap">
                  Password
                </div>
                <input
                  placeholder=" Enter Password"
                  className="text-gray-500 text-lg leading-5 self-stretch border mt-3.5 pl-4 pr-5 py-5 rounded-lg border-solid border-slate-900 border-opacity-40 whitespace-nowrap max-md:max-w-full"
                />
                <div className="self-stretch flex w-full items-start justify-between gap-5 mt-6 max-md:max-w-full max-md:flex-wrap">
                  <div className="flex flex-col self-start">
                    <div className="flex w-[154px] max-w-full items-start gap-2 self-start">
                      <input type="checkbox" className="rounded border flex w-4 h-4 flex-col border-solid border-gray-500 self-start" />
                      <div className="text-gray-500 text-lg leading-5 self-start whitespace-nowrap">
                        Remember Me
                      </div>
                    </div>
                    <div className="flex w-[280px] max-w-full items-start gap-2 mt-6 self-start">
                      <input type="checkbox" className="rounded border flex w-4 h-4 flex-col border-solid border-gray-500 self-start" />
                      <div className="text-orange-500 text-lg underline grow shrink-0 basis-auto self-start whitespace-nowrap">
                        <span className="text-gray-500">Agree to </span>
                        <span className="text-orange-500">
                          Terms & Conditions
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-orange-500 text-right text-lg leading-5 self-start whitespace-nowrap">
                    Change Password
                  </div>
                </div>
                <div className="bg-sky-700 self-center flex w-[538px] max-w-full flex-col mt-10 px-5 py-5 rounded-lg max-md:mt-10">
                  <div className="text-white text-lg font-medium leading-5 self-center whitespace-nowrap">
                    Login
                  </div>
                </div>
                <div className="text-orange-500 text-lg font-bold underline self-center mt-12 whitespace-nowrap max-md:mt-10">
                  <span className=" text-slate-900">
                    Don’t have an account?
                  </span>
                  <span className="font-bold text-slate-900"> </span>
                  <span className="font-bold text-orange-500">
                    Register Here
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
