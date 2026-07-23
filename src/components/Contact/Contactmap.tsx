export function ContactMap() {
  return (
    <div className="overflow-hidden rounded-md border border-steel-200">
     
      <iframe
        title="Johphem Associates location"
        src="https://www.google.com/maps?q=Lagos,Nigeria&output=embed"
        className="h-80 w-full lg:h-96"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}