"use client";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { PageRendererProps } from "../../model";
import { useComponentsConfig } from "../../hooks/useComponentsConfig";

const RenderPageShell = dynamic(
  async () => (await import("../render-page-shell")).RenderPageShell,
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);
const DesignerShell = dynamic(
  async () => (await import("../designer-shell")).DesignerShell,
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

export const PageRenderer = (props: PageRendererProps) => {
  const { type, id } = props;
  const config = useComponentsConfig() as any;
 console.log(type)
 if (type === "view")
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RenderPageShell config={config} id={id} />
    </Suspense>
  );
  if (type === "edit")
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <DesignerShell config={config} id={id} />
      </Suspense>
    );


  return <div>Invalid request!</div>;
};
