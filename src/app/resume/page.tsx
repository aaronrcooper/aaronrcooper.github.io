import ResumeItems from "./resume-items.json";

interface ResumeItem {
  name: string;
  jobTitle: string;
  duration: string;
  descriptions?: string[];
}

export default function Resume(): JSX.Element {
  const resumeItems: ResumeItem[] = ResumeItems;
  
  return (
    <div className="flex min-h-screen flex-col p-24">
      {resumeItems.map((item, idx) => (
        <div key={idx} className="m-4">
          <ResumeItem
            duration={item.duration}
            jobTitle={item.jobTitle}
            descriptions={item.descriptions}
            name={item.name}
          ></ResumeItem>
        </div>
      ))}
    </div>
  );
}

function ResumeItem(prop: ResumeItem): JSX.Element {
  return (
    <div>
      <div>{prop.name}</div>
      <div>{prop.jobTitle}</div>
      <div>{prop.duration}</div>

      <ul hidden={!prop.descriptions} className="list-disc ml-6">
        {prop.descriptions?.map((description, idx) => (
          <li key={idx}>{description}</li>
        ))}
      </ul>
    </div>
  );
}
