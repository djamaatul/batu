interface Props {
  params: Promise<{ id: string }>;
}
export default async function ProjectPage(props: Props) {
  const { id } = await props.params;
  return id;
}
