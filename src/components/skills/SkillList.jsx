import React from 'react';
import {skillData} from '../../services/SkillData';
import SkillIcon from './SkillIcon';
import "./Skills.css";

export default function SkillList() {
  return (
    <section className='skill-list'>
    {skillData.map((skill) => <SkillIcon skill={skill} />)}
    </section>
  )
}
