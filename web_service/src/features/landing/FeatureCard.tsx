const FeatureCard = (props: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="rounded-xl border border-border bg-card p-5">
    <div className="size-12 rounded-lg bg-gradient-to-br [&_svg]:stroke-primary-foreground [&_svg]:stroke-2">
      {props.icon}
    </div>

    <div className="mt-2 text-lg font-bold">{props.title}</div>

    <div className="my-3 w-8 border-t border-black" />

    <div className="mt-2 text-muted-foreground">{props.children}</div>
  </div>
);

export { FeatureCard };
