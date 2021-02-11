import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getShare } from '../api/shares';

import Share from './Share';

const ShareFromApi = () => {
  const { id } = useParams();

  const [share, setShare] = useState([]);

  useEffect(() => {
    getShare(id).then(shares => setShare(shares))
  }, []);

  return (<Share share={share} />);
}

export default ShareFromApi;
