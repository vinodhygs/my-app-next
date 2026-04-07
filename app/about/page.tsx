import { Button } from "@/components/button";

export default function About() {
    return (
      <>
      <div className="py-20 flex flex-col items-center justify-center gap-4">
        <h1 className="text-3xl font-bold">Button Component</h1>
        <Button variant="primary">Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="lightblue">Secondary Button</Button>
        <Button variant="darkbtn">Dark Button</Button>
        <Button>test Button</Button>
      </div>
      
      </>
    );
  }