import MessageId from "./messageId";
import NotificationTest from "./notification";

export default function Page() {
    return <section>
        <header>
            <h1>Configurações</h1>
        </header>
        <main style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <MessageId />
            <NotificationTest />
        </main>
    </section>
}