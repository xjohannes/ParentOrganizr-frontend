import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { getUser } from '@/api/parent';



export const getServerSideProps = (async () => {
    const parent: IParent = await getUser();

    return {
        props: {
            parent
        },
    };
}) satisfies GetServerSideProps<{ parent: IParent }>;

export default function Page ({parent}: InferGetServerSidePropsType<typeof getServerSideProps>) {

    return (
        <main className="flex min-h-screen items-center justify-between p-24">
            WATCHES DEFAULT PAGE
            {!parent && <li>No parent</li>}
            {parent && (
                <div>
                    <h2>Hi, {parent.firstName}. </h2>
                    <p>Here is your information:</p>
                    <ul>
                            <li className="list-image-none" key={parent.id}><p>{parent.firstName} {parent.lastName}</p></li>

                            <li key={parent.email}><p>E-mail: {parent.email}</p></li>
                            <li key={parent.phoneNumber}><p>Phone: {parent.phoneNumber}</p></li>
                    </ul>
                </div>
            )}
        </main>
    );
}
