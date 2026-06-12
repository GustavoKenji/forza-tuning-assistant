import GuideDetailPage from "@/features/upgrades-guide/UpgradesDetailPage";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function UpgradesPage({ params }: PageProps) {
  const { slug } = await params;

  return <GuideDetailPage slug={slug} />;
}