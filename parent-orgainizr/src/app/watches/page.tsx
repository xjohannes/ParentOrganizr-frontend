import { getServerSideProps } from '../lib/data';

export default async function Page () {
    const { props: { watches}    } = await getServerSideProps();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     WATCHES DEFAULT PAGE
        {watches.length === 0 && <li>No watches</li>}
        {watches && (
          <div>
            <h2>Watches</h2>
            <ul>
              {watches.map((watch: IWatch) => (
                <li key={watch.id}><p>{watch.task}</p></li>
              ))}
            </ul>
          </div>
        )}
    </main>
  );
}
