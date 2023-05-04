'use client';

function NotificationTest(){
    function request(){
        new Notification("Título da notificação", {
            body: "Ut risus purus, pellentesque vitae fermentum eu, vulputate non libero. Aenean eu sem sed nulla scelerisque vehicula ac eu nunc. Mauris sollicitudin ut metus nec sollicitudin.",
            image: "https://gcdnb.pbrd.co/images/DXJGMM5YAuQt.png?o=1",
            icon: '/static/icons/windows11/Square150x150Logo.scale-400.png',
            badge: '/static/icons/shortcuts/badge.png'
        });
    }
    
    return <button style={{ display: 'flex', padding: '.75rem 1rem', border: 'none', borderRadius: '2rem' }} onClick={ request }>Notificar</button>
}

export default NotificationTest