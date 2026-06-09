import GuideDetailsPage from "@/features/tuning-guide/GuideDetailsPage";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;

  return <GuideDetailsPage slug={slug} />;
}