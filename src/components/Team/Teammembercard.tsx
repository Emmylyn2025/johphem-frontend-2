import type { TeamMember } from '../../types/teamMember';

interface TeamMemberCardProps {
  member: TeamMember;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <div className="col-span-4 border border-steel-200 bg-concrete-100 p-5 lg:col-span-4">
      <div className="flex h-40 items-center justify-center border border-dashed border-steel-200 font-mono text-caption uppercase tracking-wide text-steel">
        [Photo]
      </div>
      <h3 className="mt-4 font-display text-lg font-semibold text-ink">
        {member.name}
      </h3>
      <p className="mt-1 font-mono text-caption uppercase tracking-wide text-rebar-rust">
        {member.role}
      </p>
      <p className="mt-2 font-body text-body text-steel">
        {member.yearsExperience}+ years experience
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {member.qualifications.map((qualification) => (
          <span
            key={qualification}
            className="rounded-full border border-steel-200 px-3 py-1 font-mono text-caption uppercase tracking-wide text-steel"
          >
            {qualification}
          </span>
        ))}
      </div>
    </div>
  );
}