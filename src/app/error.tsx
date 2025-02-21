"use client";

type Props = {
  error: Error;
};

export default function HomeError({ error }: Props) {
  return (
    <>
      <div>{error.message}<br /></div>
      <button onClick={() => window.location.reload()}>Retry</button>
    </>
  );
}
