import React from "react";

export const LastBuildDateBadge: React.FC = () => {
  const date = encodeURIComponent(process.env.NEXT_PUBLIC_LAST_UPDATED_DATE);

  return <img src={`https://badgen.net/badge/Last%20Build/${date}`} />;
};
