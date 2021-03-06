<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SubgroupResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $result = [
            'id' => $this->id,
            'name_kk' => $this->name_kk,
            'name_ru' => $this->name_ru,
            'codes_count' => $this->codes_count,
        ];
        if($this->group!=null)
            $result['group'] = [
                'id' => $this->group->id,
                'name_kk' => $this->group->name_kk,
                'name_ru' => $this->group->name_ru,
                'isZKS' => $this->group->isZKS
            ];
        else
            $result['group'] = null;
        if($this->user!=null){
            $result['user'] = [
                'id' => $this->user->id,
                'name' => $this->user->name,
                'email' => $this->user->email,
            ];
        }else
            $result['user'] = null;
        return $result;
    }
}
