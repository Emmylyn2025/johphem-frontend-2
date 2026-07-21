import { TeamMemberCard } from './Teammembercard';
import { TEAM_MEMBERS } from '../../store/Teamdata';

export function TeamGrid() {
  return (
    <section className="bg-concrete">
      <div className="container mx-auto px-6 py-16 lg:px-12 lg:py-24">
        <div className="grid grid-cols-4 gap-6 lg:grid-cols-12">
          {TEAM_MEMBERS.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}