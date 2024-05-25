"use client";
import React from "react";
import Link from "next/link";
import { Data } from "@measured/puck";
import { PuckBuilderProps } from "../../model";
import { PageRenderer } from "../page-provider";

export const PuckBuilder = ({ page }: PuckBuilderProps) => {
  const { name, id, type } = page;

  const isEdit = type === "edit";
  const isIndexPage = name === "/";

  return (
    <>
      {isEdit && <Link href={`/${name}`}>View</Link>}
      {!isEdit && isIndexPage ? (
        <Link href={`/edit`}>Edit</Link>
      ) : (
        <Link href={`/${name}/edit`}>Edit</Link>
      )}
      <PageRenderer type={type} id={id} />
    </>
  );
};
