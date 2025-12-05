import styles from './Admin.module.css';
import { 
    FiHome, 
    FiCalendar, 
    FiSettings, 
    FiFileText, 
    FiLogOut, 
    FiBell, 
    FiSearch,
    FiMoreVertical,
    FiPlus,
    FiClock
} from 'react-icons/fi';
import { MdOutlineMiscellaneousServices } from 'react-icons/md';
import { BsCurrencyDollar, BsPeople } from 'react-icons/bs';

const agendamentos = [
    { id: 1, nome: 'Maria Silva', servico: 'Corte + Escova', horario: '09:00', duracao: '1h', status: 'confirmado', avatar: 'https://randomuser.me/api/portraits/women/1.jpg' },
    { id: 2, nome: 'João Santos', servico: 'Barba', horario: '10:30', duracao: '30min', status: 'pendente', avatar: 'https://randomuser.me/api/portraits/men/2.jpg' },
    { id: 3, nome: 'Ana Costa', servico: 'Coloração', horario: '11:00', duracao: '2h', status: 'confirmado', avatar: 'https://randomuser.me/api/portraits/women/3.jpg' },
    { id: 4, nome: 'Pedro Lima', servico: 'Corte Masculino', horario: '14:00', duracao: '45min', status: 'confirmado', avatar: 'https://randomuser.me/api/portraits/men/4.jpg' },
    { id: 5, nome: 'Carla Mendes', servico: 'Manicure', horario: '15:00', duracao: '1h', status: 'cancelado', avatar: 'https://randomuser.me/api/portraits/women/5.jpg' },
];

export default function AdminView(){
    const getStatusClass = (status: string) => {
        switch(status) {
            case 'confirmado': return styles.statusConfirmado;
            case 'pendente': return styles.statusPendente
            case 'cancelado': return styles.statusCancelado;
            default: return '';
        }
    };

    const getStatusLabel = (status: string) => {
        switch(status) {
            case 'confirmado': return 'Confirmado';
            case 'pendente': return 'Pendente';
            case 'cancelado': return 'Cancelado';
            default: return status;
        }
    };

    return(
        <div className={styles.adminContainer}>
            {/* Sidebar */}
            <aside className={styles.sidebar}>
                <div className={styles.logo}>
                    <div className={styles.logoIcon}>
                        <FiClock />
                    </div>
                    <div className={styles.logoText}>
                        <span className={styles.logoTitle}>TimeGold</span>
                        <span className={styles.logoSubtitle}>Painel Admin</span>
                    </div>
                </div>

                <nav className={styles.nav}>
                    <a href="#" className={`${styles.navItem} ${styles.active}`}>
                        <FiHome /> Dashboard
                    </a>
                    <a href="#" className={styles.navItem}>
                        <FiCalendar /> Agenda
                    </a>
                    <a href="#" className={styles.navItem}>
                        <MdOutlineMiscellaneousServices /> Serviços
                    </a>
                    <a href="#" className={styles.navItem}>
                        <FiFileText /> Relatórios
                    </a>
                    <a href="#" className={styles.navItem}>
                        <FiSettings /> Configurações
                    </a>
                </nav>

                <div className={styles.upgradeBox}>
                    <span className={styles.upgradeTitle}>Upgrade para Pro</span>
                    <span className={styles.upgradeDesc}>Desbloqueie recursos avançados</span>
                </div>

                <div className={styles.logout}>
                    <FiLogOut /> Sair
                </div>
            </aside>

            {/* Main Content */}
            <main className={styles.mainContent}>
                {/* Header */}
                <header className={styles.header}>
                    <div className={styles.searchBar}>
                        <FiSearch />
                        <input type="text" placeholder="Buscar clientes, serviços..." />
                    </div>
                    <div className={styles.headerRight}>
                        <button className={styles.notificationBtn}>
                            <FiBell />
                            <span className={styles.notificationDot}></span>
                        </button>
                        <div className={styles.userInfo}>
                            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Admin" className={styles.userAvatar} />
                            <div className={styles.userDetails}>
                                <span className={styles.userName}>Carlos Admin</span>
                                <span className={styles.userRole}>Studio Bella</span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Dashboard Content */}
                <div className={styles.dashboardContent}>
                    <div className={styles.greeting}>
                        <h1>Bom dia, Carlos! 👋</h1>
                        <p>Aqui está o resumo do seu dia</p>
                    </div>

                    {/* Stats Cards */}
                    <div className={styles.statsGrid}>
                        <div className={`${styles.statCard} ${styles.statCardPurple}`}>
                            <div className={styles.statInfo}>
                                <span className={styles.statLabel}>Agendamentos Hoje</span>
                                <span className={styles.statValue}>12</span>
                                <span className={styles.statChange}>+3 em relação a ontem</span>
                            </div>
                            <div className={styles.statIcon}>
                                <FiCalendar />
                            </div>
                        </div>

                        <div className={styles.statCard}>
                            <div className={styles.statInfo}>
                                <span className={styles.statLabel}>Receita do Mês</span>
                                <span className={styles.statValue}>R$ 8.540</span>
                                <span className={styles.statChangeGreen}>+12% vs mês anterior</span>
                            </div>
                            <div className={`${styles.statIcon} ${styles.statIconYellow}`}>
                                <BsCurrencyDollar />
                            </div>
                        </div>

                        <div className={styles.statCard}>
                            <div className={styles.statInfo}>
                                <span className={styles.statLabel}>Novos Clientes</span>
                                <span className={styles.statValue}>24</span>
                                <span className={styles.statChange}>+8 esta semana</span>
                            </div>
                            <div className={`${styles.statIcon} ${styles.statIconPurple}`}>
                                <BsPeople />
                            </div>
                        </div>
                    </div>

                    {/* Content Grid */}
                    <div className={styles.contentGrid}>
                        {/* Agendamentos de Hoje */}
                        <div className={styles.agendamentosSection}>
                            <div className={styles.sectionHeader}>
                                <div>
                                    <h2>Agendamentos de Hoje</h2>
                                    <span className={styles.sectionDate}>Terça-feira, 3 de Dezembro</span>
                                </div>
                                <button className={styles.verTodosBtn}>Ver todos</button>
                            </div>

                            <div className={styles.agendamentosList}>
                                {agendamentos.map((agendamento) => (
                                    <div key={agendamento.id} className={styles.agendamentoItem}>
                                        <img src={agendamento.avatar} alt={agendamento.nome} className={styles.clienteAvatar} />
                                        <div className={styles.agendamentoInfo}>
                                            <span className={styles.clienteNome}>{agendamento.nome}</span>
                                            <span className={styles.servicoNome}>{agendamento.servico}</span>
                                        </div>
                                        <div className={styles.agendamentoHorario}>
                                            <span className={styles.horario}>{agendamento.horario}</span>
                                            <span className={styles.duracao}>{agendamento.duracao}</span>
                                        </div>
                                        <span className={`${styles.status} ${getStatusClass(agendamento.status)}`}>
                                            <FiClock /> {getStatusLabel(agendamento.status)}
                                        </span>
                                        <button className={styles.moreBtn}>
                                            <FiMoreVertical />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Ações Rápidas */}
                        <div className={styles.acoesRapidas}>
                            <h2>Ações Rápidas</h2>
                            <div className={styles.acoesGrid}>
                                <button className={`${styles.acaoBtn} ${styles.acaoPrimary}`}>
                                    <FiPlus />
                                    <span>Novo Agendamento</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}