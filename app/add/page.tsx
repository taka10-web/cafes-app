"use client";

import { redirect } from "next/navigation";
import React from "react";

import { useForm, SubmitHandler } from "react-hook-form";

type InputsCafes = {
  name: string;
  address: string;
  description: string;
  images: string[];
  phone_number: string;
  business_hours: string;
  access: string;
  regular_holiday: string;
};

export default function Add() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsCafes>();

  const onSubmit: SubmitHandler<InputsCafes> = async (data) => {
    const res = await fetch("/api/cafes/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(res);
    redirect("/cafes");
  };

  return (
    <div>
      <h1>カフェ登録フォーム</h1>
      <form className="max-w-sm mx-auto mt-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            カフェの名称
          </label>
          <input
            type="text"
            id="name"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="カフェの名前を入力してください"
            {...register("name", {
              required: "カフェの名前は必須です",
            })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="address"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            住所
          </label>
          <input
            type="text"
            id="address"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="カフェの住所を入力してくだい"
            {...register("address", {
              required: "住所は必須です",
            })}
          />
          {errors.address && (
            <p className="text-red-500 text-sm">{errors.address.message}</p>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="phone_number"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            電話番号
          </label>
          <input
            type="text"
            id="phone_number"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="電話番号を入力してください"
            {...register("phone_number", {
              minLength: {
                value: 5,
                message: "10文字以上で入力してください",
              },
              maxLength: {
                value: 15,
                message: "15文字以下で入力してください",
              },
            })}
          />
          {errors.phone_number && (
            <p className="text-red-500 text-sm">
              {errors.phone_number.message}
            </p>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="access"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            アクセス
          </label>
          <input
            type="text"
            id="access"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="アクセスを入力してくだい"
            {...register("access", {
              maxLength: {
                value: 80,
                message: "80文字以下で入力してください",
              },
            })}
          />
          {errors.access && (
            <p className="text-red-500 text-sm">{errors.access.message}</p>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="business_hours"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            営業時間
          </label>
          <input
            type="text"
            id="business_hours"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="営業時間を入力してくだい"
            {...register("business_hours", {
              required: "営業時間は必須です",
              maxLength: {
                value: 80,
                message: "80文字以下で入力してください",
              },
            })}
          />
          {errors.business_hours && (
            <p className="text-red-500 text-sm">
              {errors.business_hours.message}
            </p>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="regular_holiday"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            定休日
          </label>
          <input
            type="text"
            id="regular_holiday"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="定休日を入力してください"
            {...register("regular_holiday", {
              required: "定休日は必須です",
              maxLength: {
                value: 30,
                message: "30文字以下で入力してください",
              },
            })}
          />
          {errors.regular_holiday && (
            <p className="text-red-500 text-sm">
              {errors.regular_holiday.message}
            </p>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="images"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            画像
          </label>
          <input
            type="text"
            id="images"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="画像URL"
            {...register("images", {
              required: "画像は必須です",
            })}
          />
          {errors.images && (
            <p className="text-red-500 text-sm">{errors.images.message}</p>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            説明
          </label>
          <textarea
            id="description"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="説明"
            {...register("description", {
              required: "説明は必須です",
              minLength: {
                value: 10,
                message: "10文字以上で入力してください",
              },
              maxLength: {
                value: 300,
                message: "300文字以下で入力してください",
              },
            })}
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          登録する
        </button>
      </form>
    </div>
  );
}
