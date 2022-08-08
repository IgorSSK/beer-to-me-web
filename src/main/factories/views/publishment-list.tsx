import PublishmentList from '@presentation/views/publishment';
import { LoadPublishmentUseCaseDI } from '@main/factories/use-cases/load-publishment';
import { VoteConfiabilityUseCaseDI } from '../use-cases/vote-confiability';

const PublishmentListViewDI: React.FC = () => (
	<PublishmentList
		injection={[LoadPublishmentUseCaseDI.inject(), VoteConfiabilityUseCaseDI.inject()]}
	/>
);

export { PublishmentListViewDI };
