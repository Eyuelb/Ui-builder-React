import { PuckBuilder } from "@/shared/puck/components/puck-builder";
import { usePageInfo } from "@/shared/puck/hooks/usePageInfo";
import { DefaultPageProps } from "@/shared/puck/model";

export default async function Page({ params: { slug } }: DefaultPageProps) {
  const { name, type } = usePageInfo(slug);

  return (
    <PuckBuilder
      page={{
        name,
        type,
        id: name,
      }}
    />
  );
}
