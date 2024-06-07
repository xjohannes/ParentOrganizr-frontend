import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { getWatches } from '@/api/watch';

interface IWatch {
    id: number;
    task: number;
    parent: number;
    watchDate: Date;
    startTime: String;
    endTime: String;
    dateCreated: Date;
    dateUpdated: Date;
}

export const getServerSideProps = (async () => {
    const watches: IWatch[] = await getWatches();

    return {
        props: {
            watches
        },
    };
}) satisfies GetServerSideProps<{ watches: IWatch[] }>;

export default function Page ({watches}: InferGetServerSidePropsType<typeof getServerSideProps>) {

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
