type Params = {
  time: 'morning' | 'afternoon' | 'evening';
  cmt: string;
};

export default function TimeCmt({ params }: Params) {
  const { time, cmt } = params;
  return (
    <>
      TimeCmt : {time}-{cmt}{' '}
    </>
  );
}
